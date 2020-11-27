import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponceCreate } from '../users.model';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  request: RequestCreate = {
    name: '',
    job: ''  
  }
  response: ResponceCreate;
  constructor(
    private userService:UsersService
  ) { }

  ngOnInit(): void {
  }
  save(){
    console.log(this.request);
    this.userService.createUser(this.request).subscribe(res => this.response = res);
  }

}
