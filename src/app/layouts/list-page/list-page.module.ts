import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page.component';
import { TableModule } from 'primeng/table';
import { ListItemIdPipeModule } from '@app/pipes/list-item-id-pipe/list-item-id-pipe.module';
import { RouterModule } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [ListPageComponent],
  imports: [CommonModule, TableModule, ListItemIdPipeModule, RouterModule, ProgressSpinnerModule, InputTextModule],
  exports: [ListPageComponent],
})
export class ListPageModule {}
