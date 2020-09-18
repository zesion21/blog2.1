import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { RightSliderComponent } from './right-slider/right-slider.component';
import { LeftSliderComponent } from './left-slider/left-slider.component';
import { PublicComponentModule } from 'src/app/common/public-component/public-component.module';

@NgModule({
  declarations: [IndexComponent, RightSliderComponent, LeftSliderComponent],
  imports: [CommonModule, IndexRoutingModule, PublicComponentModule],
})
export class IndexModule {}
