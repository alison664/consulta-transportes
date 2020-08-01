import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerariosComponent } from './itinerarios.component';

describe('ItinerariosComponent', () => {
  let component: ItinerariosComponent;
  let fixture: ComponentFixture<ItinerariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItinerariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItinerariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
