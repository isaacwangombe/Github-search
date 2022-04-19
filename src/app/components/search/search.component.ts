import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username:string;
  

  constructor(private userService : UserService) { }

  findUser (){
    this.userService.updateUser(this.username);

  }



  

  ngOnInit(): void {
  }

}
