import { TestBed } from '@angular/core/testing';

import { RxjsNotificationsService } from './rxjs-notifications.service';

describe('RxjsNotificationsService', () => {
  let service: RxjsNotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsNotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
