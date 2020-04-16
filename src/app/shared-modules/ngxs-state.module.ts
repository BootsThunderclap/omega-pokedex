import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { environment } from '@env/environment';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { CacheState } from '@app/state/app-cache';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    NgxsModule.forRoot([CacheState], { developmentMode: !environment.production }),
  ],
  exports: [NgxsModule, NgxsStoragePluginModule, NgxsReduxDevtoolsPluginModule, NgxsLoggerPluginModule],
})
export class NgxsStateModule {}
