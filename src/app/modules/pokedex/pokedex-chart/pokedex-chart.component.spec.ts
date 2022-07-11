import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexChartComponent } from './pokedex-chart.component';

describe('PokedexChartComponent', () => {
  let component: PokedexChartComponent;
  let fixture: ComponentFixture<PokedexChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
