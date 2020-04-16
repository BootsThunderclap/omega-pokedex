import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContestTypesComponent } from './contest-types/contest-types.component';
import { ContestTypeDetailComponent } from './contest-type-detail/contest-type-detail.component';
import { ListItemResolver } from '@app/resolvers/list-item.resolver';
import { ContestEffectsComponent } from './contest-effects/contest-effects.component';
import { ContestEffectDetailComponent } from './contest-effect-detail/contest-effect-detail.component';
import { SuperContestEffectsComponent } from './super-contest-effects/super-contest-effects.component';

const routes: Routes = [
  { path: 'contest-types', component: ContestTypesComponent },
  {
    path: 'contest-types/:recordId',
    component: ContestTypeDetailComponent,
    resolve: { resolvedItem: ListItemResolver },
    data: { schema: 'contest-type' },
  },
  { path: 'contest-effects', component: ContestEffectsComponent },
  {
    path: 'contest-effects/:recordId',
    component: ContestEffectDetailComponent,
    resolve: { resolvedItem: ListItemResolver },
    data: { schema: 'contest-effect' },
  },
  { path: 'super-contest-effects', component: SuperContestEffectsComponent },
  { path: '', redirectTo: 'contest-types', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContestsRoutingModule {}
