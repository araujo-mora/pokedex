import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { PokemonService } from 'src/app/services/pokemon.service';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-pokedex-home',
  templateUrl: './pokedex-home.component.html',
  styleUrls: ['./pokedex-home.component.scss']
})
export class PokedexHomeComponent implements OnInit, OnDestroy {

  private unsubscribe: Subscription[] = [];
  public showList: boolean;

  constructor(
    public _pokemonService: PokemonService,
    public _share: DataShareService,
  ) {
    let changeView = this._share.flag$.subscribe((flag)=>{
      if(_.isBoolean(flag))
        this.showList = flag;
    });
    this.unsubscribe.push(changeView);
   }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
