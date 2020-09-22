import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolRoutingModule } from './tool-routing.module';
import { ToolComponent } from './tool.component';
import { MapToolComponent } from './map-tool/map-tool.component';
import { MapToolMenuComponent } from './map-tool/map-tool-menu/map-tool-menu.component';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MapToolFunComponent } from './map-tool/map-tool-fun/map-tool-fun.component';
import { PublicComponentModule } from 'src/app/common/public-component/public-component.module';
import { AdministrativeRegionPositioningComponent } from './map-tool/map-tool-fun/administrative-region-positioning/administrative-region-positioning.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ToolComponent,
    MapToolComponent,
    MapToolMenuComponent,
    MapToolFunComponent,
    AdministrativeRegionPositioningComponent,
  ],
  imports: [
    CommonModule,
    NzMenuModule,
    ToolRoutingModule,
    PublicComponentModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToolModule {}
