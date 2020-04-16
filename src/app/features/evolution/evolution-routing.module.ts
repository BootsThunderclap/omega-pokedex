import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvolutionChainsComponent } from './evolution-chains/evolution-chains.component';

const routes: Routes = [
  { path: 'evolution-chains', component: EvolutionChainsComponent },
  { path: '', redirectTo: 'evolution-chains', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvolutionRoutingModule {}
