import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestEffectDetailComponent } from './contest-effect-detail.component';

describe('ContestEffectDetailComponent', () => {
  let component: ContestEffectDetailComponent;
  let fixture: ComponentFixture<ContestEffectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestEffectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestEffectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
