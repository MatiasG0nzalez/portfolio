import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cursorX!: number;
  cursorY!: number;
  
  cursor(event:any) {
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
  }


}
