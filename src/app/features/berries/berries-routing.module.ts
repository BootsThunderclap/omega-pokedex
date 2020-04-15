import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerriesComponent } from './berries/berries.component';

const routes: Routes = [
  { path: 'berries', component: BerriesComponent },
  { path: '', redirectTo: 'berries', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerriesRoutingModule {}
