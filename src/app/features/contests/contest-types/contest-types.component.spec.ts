import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestTypesComponent } from './contest-types.component';

describe('ContestTypesComponent', () => {
  let component: ContestTypesComponent;
  let fixture: ComponentFixture<ContestTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
