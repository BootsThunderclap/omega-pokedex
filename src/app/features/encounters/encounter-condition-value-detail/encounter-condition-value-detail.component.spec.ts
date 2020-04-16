import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterConditionValueDetailComponent } from './encounter-condition-value-detail.component';

describe('EncounterConditionValueDetailComponent', () => {
  let component: EncounterConditionValueDetailComponent;
  let fixture: ComponentFixture<EncounterConditionValueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterConditionValueDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterConditionValueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
