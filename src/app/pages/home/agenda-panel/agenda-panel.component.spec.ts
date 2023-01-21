import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaPanelComponent } from './agenda-panel.component';

describe('AgendaPanelComponent', () => {
  let component: AgendaPanelComponent;
  let fixture: ComponentFixture<AgendaPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
