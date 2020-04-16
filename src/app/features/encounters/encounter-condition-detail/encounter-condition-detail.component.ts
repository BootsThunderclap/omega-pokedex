import { Component, OnInit } from '@angular/core';
import { EncounterCondition } from '@app/describe/poke-api-types';
import { Message, MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { ListItemResolved } from '@app/resolvers/list-item.resolver';

@Component({
  selector: 'app-encounter-condition-detail',
  templateUrl: './encounter-condition-detail.component.html',
  styleUrls: ['./encounter-condition-detail.component.scss'],
})
export class EncounterConditionDetailComponent implements OnInit {
  encounterCondition?: EncounterCondition;
  errors: Message[] = [];
  breadcrumb: MenuItem[] = [{ label: 'Encounter Conditions', routerLink: ['..'] }];
  home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const resolvedData = this.route.snapshot.data.resolvedItem as ListItemResolved;
    this.encounterCondition = resolvedData.listItem;
    if (this.encounterCondition) {
      this.breadcrumb.push({ label: this.encounterCondition.name });
    }
    if (resolvedData.error) {
      this.errors.push({ severity: 'error', summary: 'Error:', detail: resolvedData.error });
    }
  }
}
