import { Component, OnChanges, Input, OnInit, SimpleChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnChanges, OnDestroy {

  @Input() covidData: any;
  countries: any[] = [];
  subscription = new Subscription();
  constructor(
    private searchService: SearchService
  ) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  ngOnInit(): void {
    this.subscription = this.searchService.getCountries()
      .subscribe(
        (data: any) => {
          this.countries = data;
        }
      );
  }
  ngOnChanges(): void {
    this.countries = this.covidData?.Countries;

  }

}
