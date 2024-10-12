import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '@environment/environment';
import { IGithubService } from '../interfaces/githubService.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

   private readonly searchAllApiUrl: string = environment.searchAllApiUrl;
  
  constructor(private http: HttpClient) { }

  getUsersGithub(username: string): Observable<IGithubService> {
    return this.http.get<IGithubService>(`${this.searchAllApiUrl}?q=${username}&per_page=10`);
  }

  
}
