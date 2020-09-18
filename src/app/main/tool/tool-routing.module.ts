import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapToolComponent } from './map-tool/map-tool.component';
import { ToolComponent } from './tool.component';

const routes: Routes = [
  {
    path: '',
    component: ToolComponent,
    children: [
      {
        path: 'mapTool',
        component: MapToolComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolRoutingModule {}
