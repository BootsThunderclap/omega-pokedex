import { Component, OnInit } from '@angular/core';
import { ContestType } from '@app/describe/poke-api-types';
import { Message, MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { ListItemResolved } from '@app/resolvers/list-item.resolver';

@Component({
  selector: 'app-contest-type-detail',
  templateUrl: './contest-type-detail.component.html',
  styleUrls: ['./contest-type-detail.component.scss'],
})
export class ContestTypeDetailComponent implements OnInit {
  contestType?: ContestType;
  errors: Message[] = [];
  breadcrumb: MenuItem[] = [{ label: 'Berries', routerLink: ['..'] }];
  home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const resolvedData = this.route.snapshot.data.resolvedItem as ListItemResolved;
    this.contestType = resolvedData.listItem;
    if (this.contestType) {
      this.breadcrumb.push({ label: this.contestType.name });
    }
    if (resolvedData.error) {
      this.errors.push({ severity: 'error', summary: 'Error:', detail: resolvedData.error });
    }
  }
}
