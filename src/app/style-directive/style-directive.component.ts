import { Component } from '@angular/core';

@Component({
  selector: 'app-style-directive',
  templateUrl: './style-directive.component.html',
  styleUrls: ['./style-directive.component.scss']
})
export class StyleDirectiveComponent {
  serverId:number=10;
  serverStatus: string='offline';
  constructor(){
    this.serverStatus = Math.random() >0.5 ? 'offline':'online';
  }
  getServerstatus(){
     return this.serverStatus ;
  }
  getColor(){
    return this.serverStatus === 'online'?'green':'red';
  }

}
