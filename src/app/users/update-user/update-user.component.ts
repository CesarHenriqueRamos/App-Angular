import { Observable } from 'rxjs';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate, ResponceUpdate } from '../users.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  request:RequestUpdate = {
    name: "",
    job: ""
  }; 
  id:string;
  constructor(
    private usersService:UsersService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(this.id).subscribe({
      next : res => {
      this.request = {
        name:`${res.data.fist_name} ${res.data.last_name}`,
        job:''
      }
    }})
  }
  update(){
    this.usersService.updateUser(this.id, this.request).subscribe({
      next: res => console.log('Atualizado', res),
      error: err => console.log('Erro', err)
    });

  }
}
