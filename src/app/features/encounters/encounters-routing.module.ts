import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncounterMethodsComponent } from './encounter-methods/encounter-methods.component';
import { EncounterMethodDetailComponent } from './encounter-method-detail/encounter-method-detail.component';
import { ListItemResolver } from '@app/resolvers/list-item.resolver';
import { EncounterConditionsComponent } from './encounter-conditions/encounter-conditions.component';
import { EncounterConditionDetailComponent } from './encounter-condition-detail/encounter-condition-detail.component';

const routes: Routes = [
  { path: 'encounter-methods', component: EncounterMethodsComponent },
  {
    path: 'encounter-methods/:recordId',
    component: EncounterMethodDetailComponent,
    resolve: { resolvedItem: ListItemResolver },
    data: { schema: 'encounter-method' },
  },
  { path: 'encounter-conditions', component: EncounterConditionsComponent },
  {
    path: 'encounter-conditions/:recordId',
    component: EncounterConditionDetailComponent,
    resolve: { resolvedItem: ListItemResolver },
    data: { schema: 'encounter-condition' },
  },
  { path: '', redirectTo: 'encounter-methods', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncountersRoutingModule {}
