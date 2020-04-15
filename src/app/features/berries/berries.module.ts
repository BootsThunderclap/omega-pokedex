import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BerriesRoutingModule } from './berries-routing.module';
import { BerriesComponent } from './berries/berries.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [BerriesComponent],
  imports: [CommonModule, BerriesRoutingModule, TableModule],
})
export class BerriesModule {}
