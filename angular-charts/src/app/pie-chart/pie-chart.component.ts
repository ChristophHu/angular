import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class PieChartComponent implements OnInit {
    @Input() data: any[] = []
    @Input() label: boolean = true
    @Input() colors: string[] = ['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']

    private width: number
    private height: number
    private radius: number

    private arc: any
    private labelArc: any
    private pie: any
    private color: any
    private svg: any

    constructor(private el: ElementRef) {
        this.width = 500
        this.height = 500
        this.radius = Math.min(this.width, this.height) / 2
    }

    ngOnInit() {
        this.initSvg();
        this.drawPie();
    }

    private initSvg() {
        this.color = d3.scaleOrdinal()
            .range(this.colors)
        this.arc = d3.arc()
            .outerRadius(this.radius)
            .innerRadius(0)
        this.labelArc = d3.arc()
            .outerRadius(this.radius - 50)
            .innerRadius(this.radius - 50)
        this.pie = d3.pie()
            .sort(null)
            .value((d: any) => d.value)
        this.svg = d3.select('svg')
            .append('g')
            .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')')
    }

    private drawPie() {
        let g = this.svg.selectAll('.arc')
            .data(this.pie(this.data))
            .enter().append('g')
            .attr('class', 'arc')
        g.append('path').attr('d', this.arc)
            .style('fill', (d: any) => this.color(d.data.description) )
        if (this.label) {
            g.append('text')
                .attr('transform', (d: any) => 'translate(' + this.labelArc.centroid(d) + ')')
                .attr('dy', '.35em')
                .text((d: any) => d.data.description)
        }
    }

}
