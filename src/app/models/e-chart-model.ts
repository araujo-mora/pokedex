import { Injectable, Input } from "@angular/core";

@Injectable()
export abstract class eChartModel {
  @Input() dataTable: EChartModel;

  public id = "POKEDEX_ECHART";
  // This are the options for the Graphic
  public options: any;
  public myChart: any;                                  //This is the chart created
  public dataType: any = 'bar';                         //This is the type for the chart, in general is 'bar' or 'line'
  public showValues: boolean;
  public showRanges: boolean;
  public PIE_MAX = 15;                                  //Max data for PieGraph
  public showPie = false;                               //Flag for show Pie

  //Change the type display of the data
  abstract toBar(): void;
}
export interface EChartModel {
  title: string;                   // Name of chart
  xAxisData: Array<any>;           // Labels for X axis
  yAxisLabel: string;              // Label Y axis
  xAxisLabel: string;              // Label X axis
  legends: Array<any>;             // Labels for series
  seriesData: Array<Array<any>>;   // Values for Chart
  formatData: boolean;
  uomserie: string;
  [attr: string]: any
}
