import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
var1= "one";
var2= "two";
var3="three";
var4="four";

  constructor() { }

  ngOnInit(): void {
  }

  eventBindMethod(){
    alert("EVENT BINDING CALLED");
  }

}
