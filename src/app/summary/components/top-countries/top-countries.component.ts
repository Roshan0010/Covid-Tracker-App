import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-top-countries',
  templateUrl: './top-countries.component.html',
  styleUrls: ['./top-countries.component.css']
})
export class TopCountriesComponent implements OnInit, OnChanges {
  @Input() covidData: any;
  topConfiremedCases: any[] = [];
  topConfiremedDeaths: any[] = [];
  topConfiremedRecovered: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.topConfiremedCases = this.covidData.Countries
      ?.sort((a: any, b: any) => b.TotalConfirmed - a.TotalConfirmed)
      .slice(0, 5);

    this.topConfiremedDeaths = this.covidData.Countries
      ?.sort((a: any, b: any) => b.TotalDeaths - a.TotalDeaths)
      .slice(0, 5);

    this.topConfiremedRecovered = this.covidData.Countries
      ?.sort((a: any, b: any) => b.TotalRecovered - a.TotalRecovered)
      .slice(0, 5);

  }

}


