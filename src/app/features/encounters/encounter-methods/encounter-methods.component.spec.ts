import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterMethodsComponent } from './encounter-methods.component';

describe('EncounterMethodsComponent', () => {
  let component: EncounterMethodsComponent;
  let fixture: ComponentFixture<EncounterMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
