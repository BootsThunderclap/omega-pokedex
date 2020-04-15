import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemIdPipe } from './list-item-id.pipe';

@NgModule({
  declarations: [ListItemIdPipe],
  imports: [CommonModule],
  exports: [ListItemIdPipe],
})
export class ListItemIdPipeModule {}
