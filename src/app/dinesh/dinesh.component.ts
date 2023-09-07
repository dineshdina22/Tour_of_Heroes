import { Component } from '@angular/core';

@Component({
  selector: 'app-dinesh',
  templateUrl: './dinesh.component.html',
  styleUrls: ['./dinesh.component.scss']
})
export class DineshComponent {
fname="dinesh";
eleselected=false;
clickme (){
  this.eleselected = true;
console.log("dinesh");
var a =10;
var b =20;
var c = a+b;
console.log(c);
}

}
