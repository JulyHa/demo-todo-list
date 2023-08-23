import {User} from "./user";

export interface Item {
  id : number;
  name : string;
  complete : boolean;
  isEdit : boolean;
  timeStart: Date;
  timeComplete: Date;
  user: User
}
