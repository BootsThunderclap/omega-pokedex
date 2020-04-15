import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryFirmnessDetailComponent } from './berry-firmness-detail.component';

describe('BerryFirmnessDetailComponent', () => {
  let component: BerryFirmnessDetailComponent;
  let fixture: ComponentFixture<BerryFirmnessDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerryFirmnessDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerryFirmnessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
