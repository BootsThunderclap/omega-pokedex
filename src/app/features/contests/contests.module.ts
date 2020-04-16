import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestsRoutingModule } from './contests-routing.module';
import { ContestTypesComponent } from './contest-types/contest-types.component';
import { ListPageModule } from '@app/layouts/list-page/list-page.module';

@NgModule({
  declarations: [ContestTypesComponent],
  imports: [CommonModule, ContestsRoutingModule, ListPageModule],
})
export class ContestsModule {}
