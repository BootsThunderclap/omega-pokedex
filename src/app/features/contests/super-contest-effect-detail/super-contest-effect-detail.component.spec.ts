import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperContestEffectDetailComponent } from './super-contest-effect-detail.component';

describe('SuperContestEffectDetailComponent', () => {
  let component: SuperContestEffectDetailComponent;
  let fixture: ComponentFixture<SuperContestEffectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperContestEffectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperContestEffectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
