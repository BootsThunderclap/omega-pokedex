import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvolutionRoutingModule } from './evolution-routing.module';
import { EvolutionChainsComponent } from './evolution-chains/evolution-chains.component';
import { ListPageModule } from '@app/layouts/list-page/list-page.module';
import { EvolutionChainDetailComponent } from './evolution-chain-detail/evolution-chain-detail.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { ListItemIdPipeModule } from '@app/pipes/list-item-id-pipe/list-item-id-pipe.module';
import { MessagesModule } from 'primeng/messages';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [EvolutionChainsComponent, EvolutionChainDetailComponent],
  imports: [
    CommonModule,
    EvolutionRoutingModule,
    ListPageModule,
    BreadcrumbModule,
    CardModule,
    ListItemIdPipeModule,
    MessagesModule,
    CheckboxModule,
    FormsModule,
    FieldsetModule
  ],
})
export class EvolutionModule {}
