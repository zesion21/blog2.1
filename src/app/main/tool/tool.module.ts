import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolRoutingModule } from './tool-routing.module';
import { ToolComponent } from './tool.component';
import { MapToolComponent } from './map-tool/map-tool.component';


@NgModule({
  declarations: [ToolComponent, MapToolComponent],
  imports: [
    CommonModule,
    ToolRoutingModule
  ]
})
export class ToolModule { }
