import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  active: boolean = false;



  sizeUp(): void {

    this.active = true;
    console.log("entro");
    
  
  }
  
  
  sizeDown(): void {
  
    this.active = false;
    console.log("salio");
    
  
  }
  
}
