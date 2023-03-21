import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHonorariosComponent } from './lista-honorarios.component';

describe('ListaHonorariosComponent', () => {
  let component: ListaHonorariosComponent;
  let fixture: ComponentFixture<ListaHonorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaHonorariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaHonorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
