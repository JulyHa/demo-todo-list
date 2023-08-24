import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  users : UserService
  username: string = ''
  password: string = ''
  re_password: string = ''
  router: Router
  constructor(users: UserService, router: Router){
      this.users = users;
      this.router = router;
  }

  ngOnInit(): void {
      
  }
  register(): void{
    let res = this.users.addUser({username: this.username, pass: this.password, re_pass: this.re_password})
    if(res){
      alert("Register success!");
      this.router.navigate(['/login'])
    }
    else{
      alert("Register fail!")
    }
  }

}
