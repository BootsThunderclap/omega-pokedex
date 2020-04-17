import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvolutionChainsComponent } from './evolution-chains/evolution-chains.component';
import { EvolutionChainDetailComponent } from './evolution-chain-detail/evolution-chain-detail.component';
import { ListItemResolver } from '@app/resolvers/list-item.resolver';
import { EvolutionTriggersComponent } from './evolution-triggers/evolution-triggers.component';

const routes: Routes = [
  { path: 'evolution-chains', component: EvolutionChainsComponent },
  {
    path: 'evolution-chains/:recordId',
    component: EvolutionChainDetailComponent,
    resolve: { resolvedItem: ListItemResolver },
    data: { schema: 'evolution-chain' },
  },
  { path: 'evolution-triggers', component: EvolutionTriggersComponent },
  { path: '', redirectTo: 'evolution-chains', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvolutionRoutingModule {}
