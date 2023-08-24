import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ItemService } from '../services/item.service';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  id: number = -1;
  router: Router;
  route: ActivatedRoute;
  itemService : ItemService;
  itemDetail : Item;
  time : Date = new Date();
  time1: Date = new Date();
  constructor(router: Router, route: ActivatedRoute, itemService: ItemService){
    this.router = router;
    this.route = route;
    this.itemService = itemService;
    this.itemDetail = this.itemService.getById(this.id);
    console.log(this.itemDetail);
     
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);  
    });
    this.itemDetail = this.itemService.getById(this.id);
    console.log(this.itemDetail);
  }
 
}
