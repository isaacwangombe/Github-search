import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './class/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private repoName: string;
  profile: User;
  userName: string;

  constructor(private http: HttpClient) {
    this.profile = new User(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      0,
      0,
      0,
      new Date(),
      ''
    );
    this.userName = 'isaacmariga';
  }

  updateUser(userName: string) {
    this.userName = userName;
  }

  getUsers() {
    return this.http.get(
      'https://api.github.com/users/' +
        this.userName +
        '?clientId=' +
        environment.clientId +
        '&clientSecret=' +
        environment.clientSecret
    );
  }

  getRepos() {
    return this.http.get(
      'https://api.github.com/users/' +
        this.userName +
        '/repos?clientId=' +
        environment.clientId +
        '&clientSecret=' +
        environment.clientSecret
    );
  }

  getUserInfo() {
    interface ApiResponse {
      name: string;
      public_repo: number;
      avatar_url: string;
      login: string;
      company: string;
      created_at: Date;
      following: number;
      followers: number;
      html_url: string;
      blog: string;
      location: string;
      bio: string;
      twitter_username: string;
      public_repos: number;
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          'https://api.github.com/users/' +
            this.userName +
            '?clientId=' +
            environment.clientId +
            '&clientSecret=' +
            environment.clientSecret
        )
        .toPromise()
        .then(
          (response) => {
            this.profile = response;

            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
    return promise;
  }
}
