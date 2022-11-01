import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.css']
})
export class CountryChartComponent implements OnInit, OnChanges {

  @Input() country: string = "India";

  barChartData: ChartDataSets[] = [{
    data: [],
    label: 'Confirmed Cases'
  }];
  barChartLabels: Label[] = [];
  barChartOptions: Chart.ChartOptions = {
    responsive: true
  }
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  constructor(
    private dataService: DataService
  ) { }
  ngOnChanges(): void {
    this.getCountryData();
  }

  ngOnInit(): void {
  }
  getCountryData() {
    this.dataService.getCountryDataByDate(this.country, '2020-05-01T00:00:00Z&to=2022-05-01T00:00:00Z')
      .subscribe(
        (response: any) => {
          this.barChartData[0].data = response.map((obj: any) => obj['Cases']);
          this.barChartLabels = response.map((Obj: any) => Obj['Date'].substring(0, 10));
        });
  }



}
