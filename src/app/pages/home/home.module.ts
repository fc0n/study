import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { AgendaPanelComponent } from './agenda-panel/agenda-panel.component';

@NgModule({
  declarations: [
    HomeComponent,
    AgendaPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ],
  exports: [ HomeComponent, HomeRoutingModule]
})
export class HomeModule { }
