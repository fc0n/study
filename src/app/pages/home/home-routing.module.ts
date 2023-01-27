import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PanelScheduleComponent } from './panel-schedule/panel-schedule.component';

const routes: Routes = [
    { path: 'inicio' , component: HomeComponent, children: [
        { path: 'agenda', component: PanelScheduleComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
