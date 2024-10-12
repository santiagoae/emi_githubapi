import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

   private readonly githubApiUrl: string = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getUsersGithub(username: string): Observable<any> {
    return this.http.get<any>(`${this.githubApiUrl}?q=${username}&per_page=10`);
  }
}
