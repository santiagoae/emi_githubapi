import { Component, input } from '@angular/core';

@Component({
  selector: 'app-info-badge',
  standalone: true,
  imports: [],
  templateUrl: './info-badge.component.html',
  styleUrl: './info-badge.component.scss'
})
export class InfoBadgeComponent {
  backgroundColor = input<string>('');
  href = input<string>('');
}
