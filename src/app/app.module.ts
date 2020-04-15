import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuModule } from './components/menu/menu.module';
import { CoreModule } from './shared-modules/core.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, MenuModule, CoreModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
