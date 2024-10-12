import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

@Component({
  selector: 'app-users-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.scss'
})
export class UsersDashboardComponent {

  constructor(private formBuilder: FormBuilder) {}
  
  usersGithub = signal<FormGroup>(this.formBuilder.group({
    username: ['', Validators.required]
  }));

  onSubmit(){
    
  }
}
