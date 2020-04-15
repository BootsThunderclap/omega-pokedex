import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { RouterModule } from '@angular/router';
import { MenuService } from './app.menu.service';

@NgModule({
  declarations: [AppMenuComponent, AppMenuitemComponent],
  imports: [CommonModule, RouterModule],
  exports: [AppMenuComponent],
  providers: [MenuService],
})
export class MenuModule {}
