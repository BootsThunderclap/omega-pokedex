import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestsRoutingModule } from './contests-routing.module';
import { ContestTypesComponent } from './contest-types/contest-types.component';
import { ListPageModule } from '@app/layouts/list-page/list-page.module';
import { ContestTypeDetailComponent } from './contest-type-detail/contest-type-detail.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { ListItemIdPipeModule } from '@app/pipes/list-item-id-pipe/list-item-id-pipe.module';
import { ProgressBarModule } from 'primeng/progressbar';
import { MessagesModule } from 'primeng/messages';
import { ContestEffectsComponent } from './contest-effects/contest-effects.component';

@NgModule({
  declarations: [ContestTypesComponent, ContestTypeDetailComponent, ContestEffectsComponent],
  imports: [
    CommonModule,
    ContestsRoutingModule,
    ListPageModule,
    BreadcrumbModule,
    CardModule,
    ListItemIdPipeModule,
    ProgressBarModule,
    MessagesModule,
  ],
})
export class ContestsModule {}
