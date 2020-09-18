import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntdComponentComponent } from './antd-component/antd-component.component';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ArticleItemComponent } from './article-item/article-item.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  AccountBookFill,
  AlertFill,
  AlertOutline,
  EyeOutline,
  ClockCircleOutline,
  TagOutline,
} from '@ant-design/icons-angular/icons';

const icons = [
  AccountBookFill,
  AlertOutline,
  AlertFill,
  EyeOutline,
  ClockCircleOutline,
  TagOutline,
];
@NgModule({
  declarations: [
    AntdComponentComponent,
    HeaderComponent,
    FooterComponent,
    ArticleItemComponent,
  ],
  imports: [
    CommonModule,
    NzPaginationModule,
    RouterModule,
    NzIconModule.forRoot(icons),
  ],
  exports: [
    NzPaginationModule,
    HeaderComponent,
    ArticleItemComponent,
    FooterComponent,
    NzIconModule,
  ],
})
export class PublicComponentModule {}
