import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';
import { ResponseUser } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  responseUser: ResponseUser;
  
  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => this.responseUser = res);
    console.log(this.responseUser);
  }

}
