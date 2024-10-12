import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { GithubService } from './services/github.service';
import { defaultGithubServiceResponse, IGithubService } from './interfaces/githubService.interface';
import { CardUserComponent } from './components/card-user/card-user.component';

@Component({
  selector: 'app-users-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInputComponent, CardUserComponent],
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.scss'
})
export class UsersDashboardComponent {
  
  usersGithubForm = signal<FormGroup>(this.formBuilder.group({
    username: ['', Validators.required]
  }));
  usersGithub = signal<IGithubService>(defaultGithubServiceResponse);
  selectedUser = signal<string>('');

  private githubService = inject(GithubService)
  
  constructor(private formBuilder: FormBuilder) {}

  onSubmit(){
    console.log(this.usersGithubForm().value); 
    this.githubService.getUsersGithub(this.usersGithubForm().get('username')!.value).subscribe({
      next: res => {
        console.log(res);
        this.usersGithub.set(res);
        this.selectedUser.set(this.usersGithubForm().get('username')!.value);
        this.usersGithubForm().reset();
      },
      error: err => {
        console.log(err);
      }
    })   
  }
}
