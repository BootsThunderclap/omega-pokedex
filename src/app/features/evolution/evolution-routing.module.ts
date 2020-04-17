import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvolutionChainsComponent } from './evolution-chains/evolution-chains.component';
import { EvolutionChainDetailComponent } from './evolution-chain-detail/evolution-chain-detail.component';
import { ListItemResolver } from '@app/resolvers/list-item.resolver';

const routes: Routes = [
  { path: 'evolution-chains', component: EvolutionChainsComponent },
  {
    path: 'evolution-chains/:recordId',
    component: EvolutionChainDetailComponent,
    resolve: { resolvedItem: ListItemResolver },
    data: { schema: 'evolution-chain' },
  },
  { path: '', redirectTo: 'evolution-chains', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvolutionRoutingModule {}
