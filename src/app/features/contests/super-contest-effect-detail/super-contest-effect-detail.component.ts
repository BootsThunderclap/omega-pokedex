import { Component, OnInit } from '@angular/core';
import { SuperContestEffect } from '@app/describe/poke-api-types';
import { Message, MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { ListItemResolved } from '@app/resolvers/list-item.resolver';

@Component({
  selector: 'app-super-contest-effect-detail',
  templateUrl: './super-contest-effect-detail.component.html',
  styleUrls: ['./super-contest-effect-detail.component.scss'],
})
export class SuperContestEffectDetailComponent implements OnInit {
  superContestEffect?: SuperContestEffect;
  errors: Message[] = [];
  breadcrumb: MenuItem[] = [{ label: 'Super Contest Effects', routerLink: ['..'] }];
  home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const resolvedData = this.route.snapshot.data.resolvedItem as ListItemResolved;
    this.superContestEffect = resolvedData.listItem;
    if (this.superContestEffect) {
      this.breadcrumb.push({ label: this.superContestEffect.id.toString() });
    }
    if (resolvedData.error) {
      this.errors.push({ severity: 'error', summary: 'Error:', detail: resolvedData.error });
    }
  }
}
