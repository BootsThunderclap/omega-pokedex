import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxsStateModule } from './ngxs-state.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserAnimationsModule, HttpClientModule, NgxsStateModule],
})
export class CoreModule {}
