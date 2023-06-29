import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css']
})
export class CursorComponent {

 @Input() cursorX!: number;
  @Input() cursorY!: number;

  


  

}
