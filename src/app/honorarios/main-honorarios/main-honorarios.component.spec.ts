import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHonorariosComponent } from './main-honorarios.component';

describe('MainHonorariosComponent', () => {
  let component: MainHonorariosComponent;
  let fixture: ComponentFixture<MainHonorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHonorariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHonorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
