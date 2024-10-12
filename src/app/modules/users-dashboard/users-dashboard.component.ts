import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { GithubService } from './services/github.service';
import { defaultGithubServiceResponse, IGithubService, Item } from './interfaces/githubService.interface';
import { CardUserComponent } from './components/card-user/card-user.component';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-users-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInputComponent, CardUserComponent, NgClass],
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.scss'
})
export class UsersDashboardComponent implements OnInit{
  
  usersGithubForm = signal<FormGroup>(this.formBuilder.group({
    username: ['', [Validators.required, Validators.pattern(/^(?!.*gcpglobal).{4,}$/)]]
  }));
  usersGithub = signal<IGithubService>(defaultGithubServiceResponse);
  selectedUser = signal<string>('');

  private githubService = inject(GithubService)
  private router = inject(Router)
  
  constructor(private formBuilder: FormBuilder) {}

  async ngOnInit(): Promise<void> {
    if(sessionStorage.getItem('selectedUser')){
      const selectedUser = await this.#getUserFromSessionStorage(); // metodo con promise para el manejo de asincronia y de 'estado' 
      this.usersGithubForm().patchValue({username: selectedUser});
      this.onSubmit();
    }

  }
  
  onSubmit(){
    console.log(this.usersGithubForm().value); 
    if(!this.usersGithubForm().valid) return;
    
    this.githubService.getUsersGithub(this.usersGithubForm().get('username')!.value).subscribe({
      next: res => {
        console.log(res);
        this.usersGithub.set(res);
        this.selectedUser.set(this.usersGithubForm().get('username')!.value);
        sessionStorage.setItem('selectedUser', this.usersGithubForm().get('username')!.value);
        this.usersGithubForm().reset();
      },
      error: err => {
        console.log(err);
      }
    })   
  }

  onSelectUser(selectedUser: Item){
    this.router.navigateByUrl(`/user-profile/${selectedUser.login}/${selectedUser.score}`);
  }

  #getUserFromSessionStorage(): Promise<string>{
    return new Promise(resolve => {
      resolve(sessionStorage.getItem('selectedUser')!);
    })
  }
}
