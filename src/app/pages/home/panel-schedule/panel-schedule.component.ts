import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-schedule',
  templateUrl: './panel-schedule.component.html',
  styleUrls: ['./panel-schedule.component.scss']
})
export class PanelScheduleComponent implements OnInit {
  isALivePopUpAgenda: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  controlPopUp(){
    if(this.isALivePopUpAgenda == true){
      this.isALivePopUpAgenda = false
    }else{
      this.isALivePopUpAgenda = true
    }
  }

}
