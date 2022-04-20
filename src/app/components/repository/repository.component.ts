import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { RepositoryService } from 'src/app/repository.service';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repos:any;
  profile:any;
  userName:string;
  user: Object;
  

  constructor(
    private userService: UserService, private repositoryService: RepositoryService

  ) {
    this.userService.getUsers().subscribe(user => {
      this.user = user;
    });

    this.userService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })

  }
  findRepo() {
    this.repositoryService.updateUser(this.userName);
    this.repositoryService.getRepoInformation()
    this.repos = this.repositoryService.repos;
  }

  

  ngOnInit(): void {
  }

}