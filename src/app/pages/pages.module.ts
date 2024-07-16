import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { StoreComponent } from './store/store.component'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    StoreComponent
  ],
  bootstrap: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]

})
export class PagesModule { }
