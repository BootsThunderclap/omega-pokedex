import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryFlavorsComponent } from './berry-flavors.component';

describe('BerryFlavorsComponent', () => {
  let component: BerryFlavorsComponent;
  let fixture: ComponentFixture<BerryFlavorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerryFlavorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerryFlavorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
