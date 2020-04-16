import { Component, OnInit } from '@angular/core';
import { BerryFlavor } from '@app/describe/poke-api-types';
import { Message, MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { ListItemResolved } from '@app/resolvers/list-item.resolver';

@Component({
  selector: 'app-berry-flavor-detail',
  templateUrl: './berry-flavor-detail.component.html',
  styleUrls: ['./berry-flavor-detail.component.scss'],
})
export class BerryFlavorDetailComponent implements OnInit {
  berryFlavor?: BerryFlavor;
  errors: Message[] = [];
  breadcrumb: MenuItem[] = [{ label: 'Berry Flavors', routerLink: ['..'] }];
  home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const resolvedData = this.route.snapshot.data.resolvedItem as ListItemResolved;
    this.berryFlavor = resolvedData.listItem;
    if (this.berryFlavor) {
      this.breadcrumb.push({ label: this.berryFlavor.name });
    }
    if (resolvedData.error) {
      this.errors.push({ severity: 'error', summary: 'Error:', detail: resolvedData.error });
    }
  }
}
