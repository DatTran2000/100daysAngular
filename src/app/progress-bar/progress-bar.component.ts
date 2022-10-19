import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  // templateUrl: './progress-bar.component.html',
  // styleUrls: ['./progress-bar.component.css']

  template: `
  <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
    styles: [
      `
        .progress-bar-container,
        .progress {
          height: 20px;
        }
  
        .progress-bar-container {
          width: 100%;
        }
      `,
    ],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() backgroundColor = '#3333';
  @Input() progressColor = '#9e9e9e';
  @Input() progress = 0;

  constructor() { 
    // console.log(this.progress, this.backgroundColor, this.progressColor);
  }

  ngOnInit(): void {
    // console.log(this.progress, this.backgroundColor, this.progressColor);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.progress, this.backgroundColor, this.progressColor);
  }


}
