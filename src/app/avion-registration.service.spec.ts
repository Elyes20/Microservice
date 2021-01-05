import { TestBed } from '@angular/core/testing';

import { AvionRegistrationService } from './avion-registration.service';

describe('AvionRegistrationService', () => {
  let service: AvionRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvionRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
