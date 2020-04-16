import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-menu',
  template: `
    <div class="menu">
      <ul class="layout-menu">
        <li
          app-menuitem
          (hideOverlays)="this.hideOverlays.emit()"
          *ngFor="let item of model; let i = index"
          [item]="item"
          [index]="i"
          [root]="true"
        ></li>
      </ul>
    </div>
  `,
})
export class AppMenuComponent implements OnInit {
  @Output() hideOverlays: EventEmitter<any> = new EventEmitter();

  model: MenuItem[];

  ngOnInit() {
    this.model = [
      { label: 'Home', icon: 'fa fa-fw fa-home', routerLink: ['/home'] },
      {
        label: 'Berries',
        icon: 'fas fa-fw fa-holly-berry',
        routerLink: ['/berries'],
        items: [
          { label: 'Berries', routerLink: '/berries/berries' },
          { label: 'Berry Firmnesses', routerLink: '/berries/berry-firmnesses' },
          { label: 'Berry Flavors', routerLink: '/berries/berry-flavors' },
        ],
      },
      {
        label: 'Contests',
        icon: 'fas fa-fw fa-burn',
        routerLink: ['/contests'],
        items: [
          { label: 'Contest Types', routerLink: ['/contests/contest-types'] },
          { label: 'Contest Effects', routerLink: ['/contests/contest-effects'] },
        ],
      },
    ];
  }
}
