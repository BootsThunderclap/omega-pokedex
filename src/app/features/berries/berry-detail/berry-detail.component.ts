import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Berry } from '@app/describe/poke-api-types';
import { ListItemResolved } from '@app/resolvers/list-item.resolver';
import { Message, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-berry-detail',
  templateUrl: './berry-detail.component.html',
  styleUrls: ['./berry-detail.component.scss'],
})
export class BerryDetailComponent implements OnInit {
  berry?: Berry;
  errors: Message[] = [];
  breadcrumb: MenuItem[] = [{ label: 'Berries', routerLink: ['..'] }];
  home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const resolvedData = this.route.snapshot.data.resolvedItem as ListItemResolved;
    this.berry = resolvedData.listItem;
    if (this.berry) {
      this.breadcrumb.push({ label: this.berry.name });
    }
    if (resolvedData.error) {
      this.errors.push({ severity: 'error', summary: 'Error:', detail: resolvedData.error });
    }
  }
}
