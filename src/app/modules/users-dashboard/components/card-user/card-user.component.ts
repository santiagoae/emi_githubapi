import { Component, input } from '@angular/core';
import { Item } from '../../interfaces/githubService.interface';

@Component({
  selector: 'app-card-user',
  standalone: true,
  imports: [],
  templateUrl: './card-user.component.html',
  styleUrl: './card-user.component.scss'
})
export class CardUserComponent {
  user = input<Item>();
}
