import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'chart-componente',
  standalone: true,
  imports: [BaseChartDirective, ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {

}

var lineGenerator = d3.line();
var points = [
	[0, 80],
	[100, 100],
	[200, 30],
	[300, 50],
	[400, 40],
	[500, 80]
];

var pathData = lineGenerator(points);

// Select the path element and set its d attribute
d3.select('path')
	.attr('d', pathData);
