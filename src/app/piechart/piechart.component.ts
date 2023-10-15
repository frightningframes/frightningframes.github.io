import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  template: `
    <div style="display: block;">
      <canvas baseChart
              [data]="chartData"
              [labels]="chartLabels"
              [chartType]="'doughnut'"
      ></canvas>
    </div>
  `,
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  @Input() data?: number[];
  @Input() labels?: string[];

  chartData: number[] = [];
  chartLabels: string[] = [];


  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] || changes['labels']) {
      this.updateChartData();
    }
  }
  

  private updateChartData() {
    if (this.data && this.labels) {
      this.chartData = this.data;
      this.chartLabels = this.labels;
    }
  }
}
