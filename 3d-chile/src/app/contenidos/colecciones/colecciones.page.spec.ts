import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColeccionesPage } from './colecciones.page';

describe('ColeccionesPage', () => {
  let component: ColeccionesPage;
  let fixture: ComponentFixture<ColeccionesPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(ColeccionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
