import { Component, OnInit } from '@angular/core';
import { BerryFirmness } from '@app/describe/poke-api-types';
import { Message, MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { ListItemResolved } from '@app/resolvers/list-item.resolver';

@Component({
  selector: 'app-berry-firmness-detail',
  templateUrl: './berry-firmness-detail.component.html',
  styleUrls: ['./berry-firmness-detail.component.scss'],
})
export class BerryFirmnessDetailComponent implements OnInit {
  berryFirmness?: BerryFirmness;
  errors: Message[] = [];
  breadcrumb: MenuItem[] = [{ label: 'Berry Firmnesses', routerLink: ['..'] }];
  home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const resolvedData = this.route.snapshot.data.resolvedItem as ListItemResolved;
    this.berryFirmness = resolvedData.listItem;
    if (this.berryFirmness) {
      this.breadcrumb.push({ label: this.berryFirmness.name });
    }
    if (resolvedData.error) {
      this.errors.push({ severity: 'error', summary: 'Error:', detail: resolvedData.error });
    }
  }
}
