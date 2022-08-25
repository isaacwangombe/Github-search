import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/repository.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  user: any;
  repos: any;
  userName: string;

  ngOnInit(): void {
    this.userService.getUsers().subscribe((user) => {
      this.user = user;
    });

    this.userService.getRepos().subscribe((repos) => {
      console.log(repos);
      this.repos = repos;
    });
  }

  constructor(
    private userService: UserService,
    private repositoryService: RepositoryService
  ) {}

  findUser() {
    this.user = this.userService.profile;

    this.userService.updateUser(this.userName);
    this.userService.getUserInfo();
    this.repos = this.repositoryService.repos;

    this.repositoryService.updateUser(this.userName);
    this.repositoryService.getRepoInformation();
  }
}
