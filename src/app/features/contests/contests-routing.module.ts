import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContestTypesComponent } from './contest-types/contest-types.component';

const routes: Routes = [
  { path: 'contest-types', component: ContestTypesComponent },
  { path: '', redirectTo: 'contest-types', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContestsRoutingModule {}
