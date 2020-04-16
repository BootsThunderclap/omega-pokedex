import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncounterMethodsComponent } from './encounter-methods/encounter-methods.component';

const routes: Routes = [
  { path: 'encounter-methods', component: EncounterMethodsComponent },
  { path: '', redirectTo: 'encounter-methods', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncountersRoutingModule {}
