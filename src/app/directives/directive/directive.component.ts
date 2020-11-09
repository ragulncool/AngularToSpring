import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  booleanVar = false;
  arrayVar = ["one","two","three"];
  switchVar="two";
  
  employees = [
    {name: "Rahul", email: "rahul@gmail.com"},
    {name: "Sachin", email: "sachin@gmail.com"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
