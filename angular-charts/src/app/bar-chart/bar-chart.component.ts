import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3'

// import * as d3 from 'd3-selection';
// import * as d3Scale from 'd3-scale';
// import * as d3Array from 'd3-array';
// import * as d3Axis from 'd3-axis';

export interface Frequency {
  letter: string;
  frequency: number;
}

export const STATISTICS: Frequency[] = [
  { letter: 'Nicht bearbeitet', frequency: 5},
  { letter: 'in Bearbeitung', frequency: 3},
  { letter: 'Abgeschlossen', frequency: 4},
];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnInit {
  @ViewChild('el') el: ElementRef | undefined
  @Input() widthx: number | undefined

    private width: number = 500
    private height: number = 500
    // private margin = {top: 20, right: 20, bottom: 30, left: 40};

    private x: any;
    private y: any;
    private svg: any;
    private g: any;

    constructor() {
      console.log(this.widthx)
    }

    ngOnInit() {
        this.initSvg();
        this.initAxis();
        this.drawAxis();
        this.drawBars();
    }

    private initSvg() {
        this.svg = d3.select('svg')
        this.width = +this.width -60
        this.height = +this.height - 60
        this.g = this.svg.append('g')
            .attr('transform', 'translate(40, 20)')
    }

    private initAxis() {
        this.x = d3.scaleBand().rangeRound([0, this.width]).padding(0.1);
        this.y = d3.scaleLinear().rangeRound([this.height, 0]);
        this.x.domain(STATISTICS.map((d) => d.letter));
        this.y.domain([0, d3.max(STATISTICS, (d) => d.frequency)]);
    }

    private drawAxis() {
        this.g.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3.axisBottom(this.x))
            // .append('text')
            // .attr('class', 'axis-title')
            // .attr('y', 30)
            // .attr('dx', '44em')
            // .attr('text-anchor', 'end')
            // .text('Test');
        this.g.append('g')
            .attr('class', 'axis axis--y')
            .call(d3.axisLeft(this.y).ticks(5, ''))
            .append('text')
            // .attr('class', 'axis-title')
            // .attr('transform', 'rotate(-90)')
            // .attr('y', 6)
            // .attr('dy', '0.71em')
            // .attr('text-anchor', 'end')
            // .text('Frequency');
    }

    private drawBars() {
        this.g.selectAll('.bar')
            .data(STATISTICS)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', (d: any) => this.x(d.letter) )
            .attr('y', (d: any) => this.y(d.frequency) )
            .attr('width', this.x.bandwidth())
            .attr('height', (d: any) => this.height - this.y(d.frequency) );
    }
}
