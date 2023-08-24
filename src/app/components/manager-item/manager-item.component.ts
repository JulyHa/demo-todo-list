import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item.service";
import {Item} from "../../interfaces/item";
import { User } from 'src/app/interfaces/user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-manager-item',
  templateUrl: './manager-item.component.html',
  styleUrls: ['./manager-item.component.css']
})
export class ManagerItemComponent implements OnInit{
  listTodo: ItemService;
  itemValue: string = "";
  userLogin : any = {};
  router: Router;
  // editValue: string = "";
  editValue: Item = {
    id:0,
    name:"",
    isEdit:false,
    complete:false,
    timeStart: new Date(),
    timeComplete: new Date(),
    user: this.userLogin
  };

  constructor(itemService : ItemService, router: Router) {
    this.listTodo = itemService;
    this.router = router;
  };

  ngOnInit(): void {
    // @ts-ignore
    this.userLogin = JSON.parse(localStorage.getItem('userLogin')) == null ? null : JSON.parse(localStorage.getItem('userLogin'));
  }

  addItem():void{
    if(this.itemValue != "") {
      this.listTodo.addItem(this.itemValue, this.userLogin);
      this.itemValue = "";
    }
  }

  editItem(id: number):void{
    console.log(this.editValue)
    let item = this.editValue;
    this.listTodo.editItem(id, item);
    this.editModel(id);
  }
  deleteItem(id : number): void{
    let res = confirm("Do you want to delete item?");
    if(res){
      this.listTodo.deleteItem(id);
    }
  }
  editModel(id : number):void{
    this.listTodo.editModel(id);
    this.editValue = this.listTodo.getById(id);
  }
  completeItem(id: number): void{
    let index  = this.listTodo.getIndexById(id);
    this.listTodo.listItem[index].complete = !this.listTodo.listItem[index].complete;
    this.listTodo.listItem[index].timeComplete = new Date();
    this.listTodo.editItem(id, this.listTodo.listItem[index]);
  }
  logout(){
    localStorage.removeItem('userLogin');
    this.router.navigate(['/login']);
  }


}
