import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { CarruselComponent } from './carrusel/carrusel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CarruselComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    SharedModule
  ],
  exports: [
    NavbarComponent,
    CarruselComponent,
    SidebarComponent,
    FooterComponent
  ]
})

export class ComponentsModule { }
