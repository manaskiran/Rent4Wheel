import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
names=[
  {name:"Manas Kiran Gundimeda",pro:"Developer",cl:"190030570@kluniversity.in",path:"assets/images/manaskrian.jpg"},
  {name:"Lal Singh Rahul",pro:"Developer",cl:"190030929@kluniversity.in",path:"assets/images/rahul.jpg"},
  {name:"Hari Kishan Alla",pro:"Developer",cl:"190030051@kluniversity.in",path:"assets/images/Hari.jpg"},

];
}
