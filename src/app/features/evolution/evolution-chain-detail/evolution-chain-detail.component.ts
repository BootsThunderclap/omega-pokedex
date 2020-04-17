import { Component, OnInit } from '@angular/core';
import { EvolutionChain } from '@app/describe/poke-api-types';
import { Message, MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { ListItemResolved } from '@app/resolvers/list-item.resolver';

@Component({
  selector: 'app-evolution-chain-detail',
  templateUrl: './evolution-chain-detail.component.html',
  styleUrls: ['./evolution-chain-detail.component.scss'],
})
export class EvolutionChainDetailComponent implements OnInit {
  evolutionChain?: EvolutionChain;
  errors: Message[] = [];
  breadcrumb: MenuItem[] = [{ label: 'Evolution Chains', routerLink: ['..'] }];
  home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const resolvedData = this.route.snapshot.data.resolvedItem as ListItemResolved;
    this.evolutionChain = resolvedData.listItem;
    if (this.evolutionChain) {
      this.breadcrumb.push({ label: this.evolutionChain.id.toString() });
    }
    if (resolvedData.error) {
      this.errors.push({ severity: 'error', summary: 'Error:', detail: resolvedData.error });
    }
  }
}
