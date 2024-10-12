import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Item } from '../interfaces/githubService.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  private readonly byUserApiUrl: string = environment.byUserApiUrl;
  
  constructor(private http: HttpClient) { }

  getUserByUsername(username: string): Observable<Item> {
    return this.http.get<Item>(`${this.byUserApiUrl}${username}`);
  }
}
