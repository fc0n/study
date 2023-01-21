import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaPanelComponent } from './agenda-panel/agenda-panel.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: 'inicio' , component: HomeComponent, children: [
        { path: 'agenda', component: AgendaPanelComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
