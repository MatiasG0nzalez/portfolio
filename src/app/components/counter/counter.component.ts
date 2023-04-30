import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() finalNumber !:number;
  @Input() description!: string;

  time : number = 2500;
  currentNumber : number = 0;
  

  ngOnInit(): void {
    const interval = setInterval(() => {
      this.currentNumber++;

      if (this.currentNumber === this.finalNumber) {
        clearInterval(interval);
      }

    }, this.time/this.finalNumber);
  }

}
