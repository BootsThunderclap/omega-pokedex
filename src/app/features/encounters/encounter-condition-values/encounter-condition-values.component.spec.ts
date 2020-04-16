import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterConditionValuesComponent } from './encounter-condition-values.component';

describe('EncounterConditionValuesComponent', () => {
  let component: EncounterConditionValuesComponent;
  let fixture: ComponentFixture<EncounterConditionValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterConditionValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterConditionValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
