import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavMenuComponent } from './nav-bar/nav-menu/nav-menu.component';
import { FormsModule } from '@angular/forms';
import { PanelScheduleComponent } from './panel-schedule/panel-schedule.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    NavMenuComponent,
    PanelScheduleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [ HomeComponent, HomeRoutingModule]
})
export class HomeModule { }
