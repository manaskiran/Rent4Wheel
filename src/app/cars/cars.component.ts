import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
cars=[
  {name:"HONDA",sub:"-",det:`BIG IS NOT A SIZE, IT IS YOUR PLACE IN THE WORLD.
  IT IS AN ATTITUDE. IT IS YOUR IDENTITY. SO STEP UP,
  STAND OUT AND TAKE CHARGE. IT’S TIME
  FOR YOU TO MAKE THE BIG MOVE.`,path:"assets/images/honda.jpg"},
  {name:"HONDA 6 SEATER",sub:"Art Director",det:`BIG IS NOT A SIZE, IT IS YOUR PLACE IN THE WORLD.
  IT IS AN ATTITUDE. IT IS YOUR IDENTITY. SO STEP UP,
  STAND OUT AND TAKE CHARGE. IT’S TIME
  FOR YOU TO MAKE THE BIG MOVE.`,path:"assets/images/6honda.jpg"},
  {name:"FORD",sub:"Designer",det:`The Ford Figo is designed to perfectly fit in your smart
   world. Its energetic design and powerful BS VI compliant engine are always ready to fuel your fast-paced lifestyle.`,path:"assets/images/4ford.jpg"},
  {name:"FORD 6 SEATER",sub:"Designer",det:`The Ford Figo is designed to perfectly fit in your smart
  world. Its energetic design and powerful BS VI compliant engine are always ready to fuel your fast-paced lifestyle.
`,path:"assets/images/ford6.jpg"},


];
cars1=[
  {name:"FORD",sub:"Designer",det:`Maruti Suzuki has launched a limited edition of the Swift which 
  comes with blacked-out elements on the exterior as 
  well as the interior, for a sportier look`,path:"assets/images/suzuki.jpg"},
{name:"FORD 6 SEATER",sub:"Designer",det:`Maruti Suzuki has launched a limited edition of the Swift which 
comes with blacked-out elements on the exterior as 
well as the interior, for a sportier look`,path:"assets/images/thumb.jpg"},
{name:"MAHINDRA XUV 500",sub:"Designer",det:`MAHINDRA has launched a limited edition of the XUV 500 which 
comes with blacked-out elements on the exterior as 
well as the interior, for a sportier look`
,path:"assets/images/xuv500.jpg"},
{name:"RENAULT DUSTER",sub:"Designer",det:`RENAULT has launched a limited edition of the Duster which 
comes with blacked-out elements on the exterior as 
well as the interior, for a sportier look`
,path:"assets/images/duster.jpg"},
];
}
