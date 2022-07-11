import { Component, HostListener, Input, OnChanges, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import * as _ from 'lodash';
import { EChartModel, eChartModel } from 'src/app/models/e-chart-model';
import { EChartFactory } from '../../../models/e-chart-factory';

declare var $: any;

@Component({
  selector: 'app-pokedex-chart',
  templateUrl: './pokedex-chart.component.html',
  styleUrls: ['./pokedex-chart.component.scss']
})
export class PokedexChartComponent extends eChartModel implements OnInit, OnChanges {

  @Input() dataTable: EChartModel;
  public fontSize = 11;
  public imgFormat = 'png';
  public chartLabelConfig = 1;

  @HostListener('window:resize')
  onWindowResize():void{
    this.myChart.resize();
  }

  constructor() {
    super();
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    $('#pokemonDetails').on('shown.bs.modal', ()=> {
      var dom = document.getElementById(this.id);
      echarts.dispose(dom);
      this.myChart = echarts.init(dom);
      this.toBar();
    });
  }

  toBar() {
    this.options = EChartFactory.createGenericBarchart(this.dataTable, this.imgFormat, this.dataType, this.chartLabelConfig, this.fontSize);
    setTimeout(() => {
      this.myChart.setOption(this.options);
      this.myChart.resize();
    },500);
  }

}
