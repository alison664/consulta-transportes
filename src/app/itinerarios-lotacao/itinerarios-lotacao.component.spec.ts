import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerariosLotacaoComponent } from './itinerarios-lotacao.component';

describe('ItinerariosLotacaoComponent', () => {
  let component: ItinerariosLotacaoComponent;
  let fixture: ComponentFixture<ItinerariosLotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItinerariosLotacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItinerariosLotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
