import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncountersRoutingModule } from './encounters-routing.module';
import { EncounterMethodsComponent } from './encounter-methods/encounter-methods.component';
import { ListPageModule } from '@app/layouts/list-page/list-page.module';
import { EncounterMethodDetailComponent } from './encounter-method-detail/encounter-method-detail.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { ListItemIdPipeModule } from '@app/pipes/list-item-id-pipe/list-item-id-pipe.module';
import { MessagesModule } from 'primeng/messages';
import { EncounterConditionsComponent } from './encounter-conditions/encounter-conditions.component';
import { EncounterConditionDetailComponent } from './encounter-condition-detail/encounter-condition-detail.component';

@NgModule({
  declarations: [EncounterMethodsComponent, EncounterMethodDetailComponent, EncounterConditionsComponent, EncounterConditionDetailComponent],
  imports: [
    CommonModule,
    EncountersRoutingModule,
    ListPageModule,
    BreadcrumbModule,
    CardModule,
    ListItemIdPipeModule,
    MessagesModule,
  ],
})
export class EncountersModule {}
