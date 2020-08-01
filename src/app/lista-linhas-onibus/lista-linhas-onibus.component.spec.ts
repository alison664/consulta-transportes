import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLinhasOnibusComponent } from './lista-linhas-onibus.component';

describe('ListaLinhasOnibusComponent', () => {
  let component: ListaLinhasOnibusComponent;
  let fixture: ComponentFixture<ListaLinhasOnibusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLinhasOnibusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLinhasOnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
