import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBadgeComponent } from './info-badge.component';

describe('InfoBadgeComponent', () => {
  let component: InfoBadgeComponent;
  let fixture: ComponentFixture<InfoBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
