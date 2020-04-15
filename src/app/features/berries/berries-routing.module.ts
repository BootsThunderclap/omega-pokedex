import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerriesComponent } from './berries/berries.component';
import { BerryDetailComponent } from './berry-detail/berry-detail.component';
import { ListItemResolver } from '@app/resolvers/list-item.resolver';
import { BerryFirmnessesComponent } from './berry-firmnesses/berry-firmnesses.component';

const routes: Routes = [
  { path: 'berries', component: BerriesComponent },
  {
    path: 'berries/:recordId',
    component: BerryDetailComponent,
    resolve: { resolvedItem: ListItemResolver },
    data: { schema: 'berry' },
  },
  { path: 'berry-firmnesses', component: BerryFirmnessesComponent },
  { path: '', redirectTo: 'berries', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerriesRoutingModule {}
