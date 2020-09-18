import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ArticleComponent } from './article/article.component';
import { PublicComponentModule } from '../common/public-component/public-component.module';
import { AboutComponent } from './about/about.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';

@NgModule({
  declarations: [MainComponent, ArticleComponent, AboutComponent, ArticleDetailComponent],
  imports: [CommonModule, MainRoutingModule, PublicComponentModule],
})
export class MainModule {}
