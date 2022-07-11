import { Component, OnDestroy, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';
import { EChartModel } from 'src/app/models/e-chart-model';
import { DataShareService } from 'src/app/services/data-share.service';

declare var $: any;

@Component({
  selector: 'app-pokemon-details-modal',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {

  private unsubscribe: Subscription[] = [];
  _pokemon: any;
  public echartData: EChartModel;

  constructor(
    public _share: DataShareService,
  ) { }

  ngOnInit(): void {
    var PokeSearch = this._share.pokemonsSearch$.subscribe((pokemons)=>{
      if(_.isArray(pokemons) && pokemons.length == 1){
        this._pokemon = pokemons[0];
        this.echartData = this.mapDataToEchart(this._pokemon.stats);
      }
    });
    this.unsubscribe.push(PokeSearch);
    var pokeSub = this._share.pokemons$.subscribe((pokemon)=>{
      if(!pokemon.length && pokemon.id){
        this._pokemon = pokemon;
        this.echartData = this.mapDataToEchart(this._pokemon.stats);
      }
    });
    this.unsubscribe.push(pokeSub);
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  mapDataToEchart(pokemonStats) {
    let eChartData: EChartModel = {
      title: "Base Points",
      yAxisLabel: "",
      xAxisLabel: "",
      xAxisData: this.getAxisXData(pokemonStats),
      legends: [],
      seriesData: [this.getSeries(pokemonStats)],
      formatData: false,
      uomserie: "",
    };
    return eChartData;
  }

  getAxisXData(stats) {
    var axisData = [];
    _.forEach(stats, (stat) => {
      if(stat && stat.stat){
        axisData.push(stat.stat.name);
      }
    });
    return axisData;
  }

  getSeries(stats){
    var axisData = [];
    _.forEach(stats, (stat) => {
      if(stat){
        axisData.push(stat.base_stat);
      }
    });
    return axisData;
  }

}
