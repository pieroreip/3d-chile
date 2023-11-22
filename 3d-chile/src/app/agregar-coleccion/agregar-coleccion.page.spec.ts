import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarColeccionPage } from './agregar-coleccion.page';

describe('AgregarColeccionPage', () => {
  let component: AgregarColeccionPage;
  let fixture: ComponentFixture<AgregarColeccionPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(AgregarColeccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
