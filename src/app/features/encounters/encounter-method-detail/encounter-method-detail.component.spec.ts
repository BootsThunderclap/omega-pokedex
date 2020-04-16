import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterMethodDetailComponent } from './encounter-method-detail.component';

describe('EncounterMethodDetailComponent', () => {
  let component: EncounterMethodDetailComponent;
  let fixture: ComponentFixture<EncounterMethodDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterMethodDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterMethodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
