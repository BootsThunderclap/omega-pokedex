import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestTypeDetailComponent } from './contest-type-detail.component';

describe('ContestTypeDetailComponent', () => {
  let component: ContestTypeDetailComponent;
  let fixture: ComponentFixture<ContestTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
