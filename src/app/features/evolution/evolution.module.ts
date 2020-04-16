import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvolutionRoutingModule } from './evolution-routing.module';
import { EvolutionChainsComponent } from './evolution-chains/evolution-chains.component';
import { ListPageModule } from '@app/layouts/list-page/list-page.module';

@NgModule({
  declarations: [EvolutionChainsComponent],
  imports: [CommonModule, EvolutionRoutingModule, ListPageModule],
})
export class EvolutionModule {}
