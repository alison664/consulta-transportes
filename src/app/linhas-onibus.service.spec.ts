import { TestBed } from '@angular/core/testing';

import { LinhasOnibusService } from './linhas-onibus.service';

describe('LinhasOnibusService', () => {
  let service: LinhasOnibusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinhasOnibusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
