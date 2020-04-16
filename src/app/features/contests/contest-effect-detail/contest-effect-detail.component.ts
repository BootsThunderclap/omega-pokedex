import { Component, OnInit } from '@angular/core';
import { ContestEffect } from '@app/describe/poke-api-types';
import { Message, MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { ListItemResolved } from '@app/resolvers/list-item.resolver';

@Component({
  selector: 'app-contest-effect-detail',
  templateUrl: './contest-effect-detail.component.html',
  styleUrls: ['./contest-effect-detail.component.scss'],
})
export class ContestEffectDetailComponent implements OnInit {
  contestEffect?: ContestEffect;
  errors: Message[] = [];
  breadcrumb: MenuItem[] = [{ label: 'Contest Effects', routerLink: ['..'] }];
  home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const resolvedData = this.route.snapshot.data.resolvedItem as ListItemResolved;
    this.contestEffect = resolvedData.listItem;
    if (this.contestEffect) {
      this.breadcrumb.push({ label: this.contestEffect.id.toString() });
    }
    if (resolvedData.error) {
      this.errors.push({ severity: 'error', summary: 'Error:', detail: resolvedData.error });
    }
  }
}
