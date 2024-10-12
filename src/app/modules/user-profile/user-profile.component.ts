import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubServiceService } from './services/github-service.service';
import { defaultSelectedUser, ISelectedUser } from './interfaces/githubService.interface';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {

  selectedUser = signal<ISelectedUser>(defaultSelectedUser);

  private activatedRoute:ActivatedRoute = inject(ActivatedRoute);
  private githubService = inject(GithubServiceService);

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({username}) => {
      this.getUserInfoByUsername(username);
    });
  }

  getUserInfoByUsername(username: string){
    this.githubService.getUserByUsername(username).subscribe({
      next: res => {
        console.log(res);
        this.selectedUser.set(res);
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
