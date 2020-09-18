import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { ArticleComponent } from './article/article.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./index/index.module').then((r) => r.IndexModule),
      },
      {
        path: 'tool',
        loadChildren: () =>
          import('./tool/tool.module').then((r) => r.ToolModule),
      },
      {
        path: 'article',
        component: ArticleComponent,
      },
      {
        path: 'article/:type',
        component: ArticleComponent,
      },
      {
        path: 'articleDetail/:articleId',
        component: ArticleDetailComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
