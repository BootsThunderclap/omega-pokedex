import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'berries',
    loadChildren: () => import('./features/berries/berries.module').then(m => m.BerriesModule),
  },
  { path: 'contests', loadChildren: () => import('./features/contests/contests.module').then(m => m.ContestsModule) },
  {
    path: 'encounters',
    loadChildren: () => import('./features/encounters/encounters.module').then(m => m.EncountersModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
