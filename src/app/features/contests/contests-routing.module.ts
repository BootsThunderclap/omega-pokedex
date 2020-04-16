import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContestTypesComponent } from './contest-types/contest-types.component';
import { ContestTypeDetailComponent } from './contest-type-detail/contest-type-detail.component';
import { ListItemResolver } from '@app/resolvers/list-item.resolver';

const routes: Routes = [
  { path: 'contest-types', component: ContestTypesComponent },
  {
    path: 'contest-types/:recordId',
    component: ContestTypeDetailComponent,
    resolve: { resolvedItem: ListItemResolver },
    data: { schema: 'contest-type' },
  },
  { path: '', redirectTo: 'contest-types', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContestsRoutingModule {}