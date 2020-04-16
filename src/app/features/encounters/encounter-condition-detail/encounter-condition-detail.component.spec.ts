import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterConditionDetailComponent } from './encounter-condition-detail.component';

describe('EncounterConditionDetailComponent', () => {
  let component: EncounterConditionDetailComponent;
  let fixture: ComponentFixture<EncounterConditionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterConditionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterConditionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
