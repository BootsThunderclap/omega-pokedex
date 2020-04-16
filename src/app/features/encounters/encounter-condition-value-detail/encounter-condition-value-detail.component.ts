import { Component, OnInit } from '@angular/core';
import { EncounterConditionValue } from '@app/describe/poke-api-types';
import { Message, MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { ListItemResolved } from '@app/resolvers/list-item.resolver';

@Component({
  selector: 'app-encounter-condition-value-detail',
  templateUrl: './encounter-condition-value-detail.component.html',
  styleUrls: ['./encounter-condition-value-detail.component.scss'],
})
export class EncounterConditionValueDetailComponent implements OnInit {
  encounterConditionValue?: EncounterConditionValue;
  errors: Message[] = [];
  breadcrumb: MenuItem[] = [{ label: 'Encounter Condition Values', routerLink: ['..'] }];
  home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const resolvedData = this.route.snapshot.data.resolvedItem as ListItemResolved;
    this.encounterConditionValue = resolvedData.listItem;
    if (this.encounterConditionValue) {
      this.breadcrumb.push({ label: this.encounterConditionValue.name });
    }
    if (resolvedData.error) {
      this.errors.push({ severity: 'error', summary: 'Error:', detail: resolvedData.error });
    }
  }
}
