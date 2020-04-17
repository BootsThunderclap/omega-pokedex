import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionTriggersComponent } from './evolution-triggers.component';

describe('EvolutionTriggersComponent', () => {
  let component: EvolutionTriggersComponent;
  let fixture: ComponentFixture<EvolutionTriggersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionTriggersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
