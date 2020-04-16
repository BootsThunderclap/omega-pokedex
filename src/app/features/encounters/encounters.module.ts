import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncountersRoutingModule } from './encounters-routing.module';
import { EncounterMethodsComponent } from './encounter-methods/encounter-methods.component';
import { ListPageModule } from '@app/layouts/list-page/list-page.module';

@NgModule({
  declarations: [EncounterMethodsComponent],
  imports: [CommonModule, EncountersRoutingModule, ListPageModule],
})
export class EncountersModule {}
