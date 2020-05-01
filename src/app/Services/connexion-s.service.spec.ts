import { TestBed } from '@angular/core/testing';

import { ConnexionSService } from './connexion-s.service';

describe('ConnexionSService', () => {
  let service: ConnexionSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnexionSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
