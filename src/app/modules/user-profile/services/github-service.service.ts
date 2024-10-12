import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { ISelectedUser } from '../interfaces/githubService.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  private readonly byUserApiUrl: string = environment.byUserApiUrl;
  
  constructor(private http: HttpClient) { }

  getUserByUsername(username: string): Observable<ISelectedUser> {
    return this.http.get<ISelectedUser>(`${this.byUserApiUrl}${username}`);
  }
}
