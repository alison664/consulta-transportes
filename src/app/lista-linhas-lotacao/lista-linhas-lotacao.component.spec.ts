import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLinhasLotacaoComponent } from './lista-linhas-lotacao.component';

describe('ListaLinhasLotacaoComponent', () => {
  let component: ListaLinhasLotacaoComponent;
  let fixture: ComponentFixture<ListaLinhasLotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLinhasLotacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLinhasLotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
