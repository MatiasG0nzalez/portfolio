import { transition } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})

export class MouseComponent {



onMouseMove(event: MouseEvent):void{

  document.documentElement.style.setProperty('--mouse-x', event.clientX-15 + 'px');
  document.documentElement.style.setProperty('--mouse-y', event.clientY-15 + 'px');


}


}