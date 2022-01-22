import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MultiLineChartComponent } from './multi-line-chart/multi-line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { BrushZoomComponent } from './brush-zoom/brush-zoom.component';
import { BarChartVerticalComponent } from './bar-chart-vertical/bar-chart-vertical.component';
import { DottedLineChartComponent } from './dotted-line-chart/dotted-line-chart.component';
import { LineChartTwoComponent } from './line-chart-two/line-chart-two.component';
import { ParallelSetChartComponent } from './parallel-set-chart/parallel-set-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    MultiLineChartComponent,
    PieChartComponent,
    DonutChartComponent,
    StackedBarChartComponent,
    BrushZoomComponent,
    BarChartVerticalComponent,
    DottedLineChartComponent,
    LineChartTwoComponent,
    ParallelSetChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
