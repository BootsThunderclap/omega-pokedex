import { TestBed } from '@angular/core/testing';

import { ListItemResolver } from './list-item.resolver';

describe('ListItemResolver', () => {
  let service: ListItemResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListItemResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
