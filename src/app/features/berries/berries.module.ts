import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BerriesRoutingModule } from './berries-routing.module';
import { BerriesComponent } from './berries/berries.component';
import { TableModule } from 'primeng/table';
import { ListItemIdPipeModule } from 'src/app/pipes/list-item-id-pipe/list-item-id-pipe.module';

@NgModule({
  declarations: [BerriesComponent],
  imports: [CommonModule, BerriesRoutingModule, TableModule, ListItemIdPipeModule],
})
export class BerriesModule {}
