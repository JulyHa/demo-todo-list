import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item.service";
import {Item} from "../../interfaces/item";

@Component({
  selector: 'app-manager-item',
  templateUrl: './manager-item.component.html',
  styleUrls: ['./manager-item.component.css']
})
export class ManagerItemComponent implements OnInit{
  listTodo: ItemService;
  itemValue: string = "";
  // editValue: string = "";
  // editValue: Item = {id:0, isEdit:false, name:"", complete:false};

  constructor(itemService : ItemService) {
    this.listTodo = itemService;
  };

  ngOnInit(): void {
  }

  addItem():void{
    if(this.itemValue != "") {
      this.listTodo.addItem(this.itemValue);
      this.itemValue = "";
    }
  }

  editItem(id: number):void{
    // console.log(this.editValue)
    // let item = this.editValue;
    // this.listTodo.editItem(id, item);
    // this.editModel(id);
  }
  deleteItem(id : number): void{
    let res = confirm("Do you want to delete item?");
    if(res){
      this.listTodo.deleteItem(id);
    }
  }
  editModel(id : number):void{
    this.listTodo.editModel(id);
    // this.editValue = this.listTodo.getById(id);
  }
  completeItem(id: number): void{
    let index  = this.listTodo.getIndexById(id);
    this.listTodo.listItem[index].complete = !this.listTodo.listItem[index].complete;
    this.listTodo.editItem(id, this.listTodo.listItem[index]);
  }


}
