import { Component, OnInit } from '@angular/core';
import { EvolutionTrigger } from '@app/describe/poke-api-types';
import { Message, MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { ListItemResolved } from '@app/resolvers/list-item.resolver';

@Component({
  selector: 'app-evolution-trigger-detail',
  templateUrl: './evolution-trigger-detail.component.html',
  styleUrls: ['./evolution-trigger-detail.component.scss'],
})
export class EvolutionTriggerDetailComponent implements OnInit {
  evolutionTrigger?: EvolutionTrigger;
  errors: Message[] = [];
  breadcrumb: MenuItem[] = [{ label: 'Evolution Triggers', routerLink: ['..'] }];
  home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const resolvedData = this.route.snapshot.data.resolvedItem as ListItemResolved;
    this.evolutionTrigger = resolvedData.listItem;
    if (this.evolutionTrigger) {
      this.breadcrumb.push({ label: this.evolutionTrigger.id.toString() });
    }
    if (resolvedData.error) {
      this.errors.push({ severity: 'error', summary: 'Error:', detail: resolvedData.error });
    }
  }
}
