import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { OneserviceService } from '../oneservice.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
@Input() VarToChild;
@Output() ObjFromChild = new EventEmitter();
 booleanVar=false;
 switchVar="one";
 colors=["red","blue","yellow"];
 text="before";

users;Object;

  constructor(private oneS: OneserviceService) { }

  ngOnInit() {
   this.printApi();
   this.fireEvent();
   this.restCall();
  }

  restCall(){
   this.oneS.doFrontToBackend().subscribe(data => {
    this.text = data.name;
  });
  }

  fireEvent(){
    this.ObjFromChild.emit('output');
  }

  firstClick(){
    console.log("Dbl clicked")
    this.oneS.secondClick();
  }

  method(value){
    console.log(value);
  }

  printApi(){
    this.oneS.getUsers().subscribe(data =>{
      this.users = data;
      console.log(this.users);
    })
  }
}
