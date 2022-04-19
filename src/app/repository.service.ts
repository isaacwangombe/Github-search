import { Injectable } from '@angular/core';
import { Repository } from './class/repository';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  repos: Repository;
  userName: string;

  constructor(
    private http: HttpClient
  ) {
    this.repos = new Repository("", "", 0, "", new Date);
  }

  getRepoInformation() {
    interface ApiResponse {
      name: string;
      description: string;
      forks: number;
      html_url: string;
      created_at: Date;

    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + this.userName + "clientId=" + environment.clientId + "&clientSecret=" + environment.clientSecret).toPromise().then(response => {
          
          this.repos = response       

          resolve()
        },
          error => {
            //this.profile.name = "Error"
            //this.quote.author = "Winston Churchill"

            reject(error)
          })
    })
    return promise
  }

  updateUser(userName:string) {
    this.userName = userName;

  }
}