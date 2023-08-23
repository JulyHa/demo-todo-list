import { Injectable } from '@angular/core';
import {Item} from "../interfaces/item";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  listItem : Array<Item>;
  // userLogin: User;

  constructor() {
    // @ts-ignore
    this.listItem = JSON.parse(localStorage.getItem("item"))==null? [] :  JSON.parse(localStorage.getItem("item"));
  }
  getListItem() : Array<Item>{
    return this.listItem;
  }
  // @ts-ignore
  getById(id : number) : Item{
    for(let item of this.listItem){
      if(item.id == id){
        return item;
      }
    }
  }
  getIndexById(id : number): number{
    for(let i =0; i< this.listItem.length; i++){
        if(this.listItem[i].id == id){
          return i;
        }
    }
    return -1;
  }
  addItem(value: string) : void{
    let id;
    if(this.listItem.length == 0){
      id = 1;
    }
    else {
      id = this.listItem[this.listItem.length-1].id + 1;
    }
    // let item :Item ={
    //   // id: id,
    //   // name : value,
    //   // complete: false,
    //   // isEdit: false,
    //   // timeComplet
    // }
    // this.listItem.push(item)
    localStorage.setItem("item", JSON.stringify(this.listItem))
  }
  editItem(id : number, newItem : Item): void{
    let index = this.getIndexById(id);
    if(index >= 0 && index < this.listItem.length) {
      this.listItem[index] = newItem;
      localStorage.setItem("item", JSON.stringify(this.listItem))
    }
  }
  editModel(id : number): void{
    let index = this.getIndexById(id);
    this.listItem[index].isEdit = !this.listItem[index].isEdit;
    localStorage.setItem("item", JSON.stringify(this.listItem))
  }
  deleteItem(id : number): void{
    let index = this.getIndexById(id);
    if(index >= 0 && index < this.listItem.length) {
      this.listItem.splice(index, 1);
      localStorage.setItem("item", JSON.stringify(this.listItem))
    }

  }

}
