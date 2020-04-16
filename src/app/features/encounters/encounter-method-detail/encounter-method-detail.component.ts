import { Component, OnInit } from '@angular/core';
import { EncounterMethod } from '@app/describe/poke-api-types';
import { Message, MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { ListItemResolved } from '@app/resolvers/list-item.resolver';

@Component({
  selector: 'app-encounter-method-detail',
  templateUrl: './encounter-method-detail.component.html',
  styleUrls: ['./encounter-method-detail.component.scss'],
})
export class EncounterMethodDetailComponent implements OnInit {
  encounterMethod?: EncounterMethod;
  errors: Message[] = [];
  breadcrumb: MenuItem[] = [{ label: 'Encounter Methods', routerLink: ['..'] }];
  home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const resolvedData = this.route.snapshot.data.resolvedItem as ListItemResolved;
    this.encounterMethod = resolvedData.listItem;
    if (this.encounterMethod) {
      this.breadcrumb.push({ label: this.encounterMethod.name });
    }
    if (resolvedData.error) {
      this.errors.push({ severity: 'error', summary: 'Error:', detail: resolvedData.error });
    }
  }
}
