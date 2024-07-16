import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FiltersComponent } from './filters/filters.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    SearchComponent,
    FiltersComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [
    SearchComponent,
    FiltersComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
