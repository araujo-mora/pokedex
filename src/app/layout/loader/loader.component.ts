import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  _isLoading: boolean;
  isLoading$: Subscription
  constructor(
    private readonly _loader: LoaderService,
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this._loader.isLoading$.subscribe(
      (load)=>{
        this._isLoading = load;
      }
    );
  }

  ngOnDestroy(): void {
    this.isLoading$.unsubscribe();
  }

}