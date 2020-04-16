import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryFlavorDetailComponent } from './berry-flavor-detail.component';

describe('BerryFlavorDetailComponent', () => {
  let component: BerryFlavorDetailComponent;
  let fixture: ComponentFixture<BerryFlavorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerryFlavorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerryFlavorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
