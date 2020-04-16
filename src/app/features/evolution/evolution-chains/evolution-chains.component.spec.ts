import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionChainsComponent } from './evolution-chains.component';

describe('EvolutionChainsComponent', () => {
  let component: EvolutionChainsComponent;
  let fixture: ComponentFixture<EvolutionChainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionChainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionChainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
