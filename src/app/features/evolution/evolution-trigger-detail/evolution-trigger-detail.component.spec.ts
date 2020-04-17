import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionTriggerDetailComponent } from './evolution-trigger-detail.component';

describe('EvolutionTriggerDetailComponent', () => {
  let component: EvolutionTriggerDetailComponent;
  let fixture: ComponentFixture<EvolutionTriggerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionTriggerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionTriggerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
