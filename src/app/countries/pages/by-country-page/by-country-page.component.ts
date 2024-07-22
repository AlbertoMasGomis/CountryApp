import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../service/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  public countries: Country[] = [];
  constructor(private countryService: CountriesService) {}

  searchCountry(term: string) {
    return this.countryService
      .searchCountry(term)
      .subscribe((countries) => (this.countries = countries));
  }
}
