import { AfterViewInit, effect, Directive, ElementRef, input, signal, OnInit } from '@angular/core';
/* Imports */
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { IChartData, defaultDataChart } from './interfaces/bar-chart.interface';


@Directive({
  selector: '[appBarChart]',
  standalone: true
})
export class BarChartDirective implements AfterViewInit{

  chData = input<Array<IChartData>>(defaultDataChart);
  private root = signal<am5.Root | undefined>(undefined);
  private xAxis = signal<am5xy.CategoryAxis<any> | undefined>(undefined);
  private series = signal<am5xy.ColumnSeries | undefined>(undefined);

  constructor(private elementRef: ElementRef<HTMLElement>) {
    effect(() => {
        if(!this.xAxis()) return;
        this.xAxis()!.data.setAll(this.chData());
        this.series()!.data.setAll(this.chData());            
      }, {allowSignalWrites: true});    
  }
  
  ngAfterViewInit(): void {
    this.root.set(am5.Root.new(this.elementRef.nativeElement));
    this.#renderChart();
  }

  #renderChart(){
    if(!this.root()) return;
      
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    this.root()!.setThemes([
      am5themes_Animated.new(this.root()!)
    ]);
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = this.root()!.container.children.push(am5xy.XYChart.new(this.root()!, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "none",
      pinchZoomX: true,
      paddingLeft:0,
      paddingRight:1
    }));
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(this.root()!, {}));
    cursor.lineY.set("visible", false);
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xRenderer = am5xy.AxisRendererX.new(this.root()!, { 
      minGridDistance: 30, 
      minorGridEnabled: true
    });
    
    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15
    });
    
    xRenderer.grid.template.setAll({
      location: 1
    })
    
    this.xAxis.set(chart.xAxes.push(am5xy.CategoryAxis.new(this.root()!, {
      maxDeviation: 0.3,
      categoryField: "user",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(this.root()!, {})
    })));

    this.xAxis()!.get("renderer").labels.template.set("fill", am5.color(0xFFFFFF));
    this.xAxis()!.get("renderer").grid.template.set("stroke", am5.color(0xFFFFFF));
    
    let yRenderer = am5xy.AxisRendererY.new(this.root()!, {
      strokeOpacity: 0.1
    })
    
    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(this.root()!, {
      maxDeviation: 0.3,
      renderer: yRenderer
    }));
    
    yAxis.get("renderer").labels.template.set("fill", am5.color(0xFFFFFF));
    yAxis.get("renderer").grid.template.set("stroke", am5.color(0xFFFFFF));

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    this.series.set(chart.series.push(am5xy.ColumnSeries.new(this.root()!, {
      name: "Series 1",
      xAxis: this.xAxis()!,
      yAxis: yAxis,
      valueYField: "value",
      sequencedInterpolation: true,
      categoryXField: "user",
      tooltip: am5.Tooltip.new(this.root()!, {
        labelText: "{valueY}"
      })
    })));
    
    this.series()!.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
    this.series()!.columns.template.adapters.add("fill", (fill, target) => {
      return chart.get("colors")!.getIndex(this.series()!.columns.indexOf(target));
    });
    
    this.series()!.columns.template.adapters.add("stroke", (stroke, target) => {
      return chart.get("colors")!.getIndex(this.series()!.columns.indexOf(target));
    });    
    
    this.xAxis()!.data.setAll(this.chData());
    this.series()!.data.setAll(this.chData());    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    this.series()!.appear(1000);
    chart.appear(1000, 100);
  }

}
