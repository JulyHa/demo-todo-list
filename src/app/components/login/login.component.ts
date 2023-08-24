import {Component, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username : string = "";
  password : string = "";
  userService: UserService;
  router: Router
  constructor(userService:UserService, router: Router) {
    this.userService = userService;
    this.router = router;
  }
  ngOnInit(): void {
  }
  login(){
    let user: User = {
      id:1,
      username: this.username,
      password: this.password,
    }
    let res = this.userService.checkExist(user);
    if(res){
      localStorage.setItem('userLogin', JSON.stringify(user));
      this.router.navigate(['/item'])
    }
    else{
      alert("Fail!")
    }
  }


}
