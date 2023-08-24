import {Injectable} from '@angular/core';
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<User>;

  constructor() {
    // @ts-ignore
    this.users = JSON.parse(localStorage.getItem("users"))==null? [] : JSON.parse(localStorage.getItem("users"));
  }

  findIndexById(id: number): number {
    return this.users.findIndex(user => user.id === id);
  }

  findById(id: number): User | null {
    return this.users.find(user => user.id === id) || null;
  }

  saveLocalStorage() {
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  addUser(user: {username: string, pass: string, re_pass: string}): boolean {
    let newUser: User = {id: 0,username: user.username, password: user.pass}
    if(user.pass != user.re_pass){
        return false;
    }
    else{
      let res = this.checkExist(newUser);
      if(res){
        return false; 
      }
      else{
        this.users.push(newUser);
        this.saveLocalStorage();
        return true;
      }
    }
  }

  edit(id: number, newUser: User): void {
    let index = this.findIndexById(id);
    if (index >= 0 && index < this.users.length) {
      this.users[index] = newUser;
      this.saveLocalStorage();
    }
  }

  deleteUser(id: number): void {
    let index = this.findIndexById(id);
    if (index >= 0 && index < this.users.length) {
      this.users.splice(index, 1);
      this.saveLocalStorage();
    }
  }
  checkExist(user:User):boolean{
    for (let userItem of this.users) {
      if(userItem.password == user.password && userItem.username == user.username){
        return true;
      }
    }
    return false;
  }
}
