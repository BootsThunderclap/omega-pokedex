import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionChainDetailComponent } from './evolution-chain-detail.component';

describe('EvolutionChainDetailComponent', () => {
  let component: EvolutionChainDetailComponent;
  let fixture: ComponentFixture<EvolutionChainDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionChainDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionChainDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
