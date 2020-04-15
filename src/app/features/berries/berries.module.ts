import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BerriesRoutingModule } from './berries-routing.module';
import { BerriesComponent } from './berries/berries.component';
import { TableModule } from 'primeng/table';
import { ListItemIdPipeModule } from '@app/pipes/list-item-id-pipe/list-item-id-pipe.module';
import { BerryDetailComponent } from './berry-detail/berry-detail.component';
import { MessagesModule } from 'primeng/messages';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BerriesComponent, BerryDetailComponent],
  imports: [
    CommonModule,
    BerriesRoutingModule,
    TableModule,
    ListItemIdPipeModule,
    MessagesModule,
    BreadcrumbModule,
    CardModule,
    RatingModule,
    FormsModule
  ],
})
export class BerriesModule {}
