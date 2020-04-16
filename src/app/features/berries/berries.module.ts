import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BerriesRoutingModule } from './berries-routing.module';
import { BerriesComponent } from './berries/berries.component';
import { ListItemIdPipeModule } from '@app/pipes/list-item-id-pipe/list-item-id-pipe.module';
import { BerryDetailComponent } from './berry-detail/berry-detail.component';
import { MessagesModule } from 'primeng/messages';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { BerryFirmnessesComponent } from './berry-firmnesses/berry-firmnesses.component';
import { ListPageModule } from '@app/layouts/list-page/list-page.module';
import { BerryFirmnessDetailComponent } from './berry-firmness-detail/berry-firmness-detail.component';
import { BerryFlavorsComponent } from './berry-flavors/berry-flavors.component';
import { BerryFlavorDetailComponent } from './berry-flavor-detail/berry-flavor-detail.component';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [
    BerriesComponent,
    BerryDetailComponent,
    BerryFirmnessesComponent,
    BerryFirmnessDetailComponent,
    BerryFlavorsComponent,
    BerryFlavorDetailComponent,
  ],
  imports: [
    CommonModule,
    BerriesRoutingModule,
    ListItemIdPipeModule,
    MessagesModule,
    BreadcrumbModule,
    CardModule,
    ListPageModule,
    ProgressBarModule,
  ],
})
export class BerriesModule {}
