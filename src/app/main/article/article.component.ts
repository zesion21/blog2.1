import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import {
  ApiFetchService,
  resBody,
} from 'src/app/common/service/api-fetch.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less'],
})
export class ArticleComponent implements OnInit {
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private api: ApiFetchService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(({ type }) => {
      this.api
        .get('/article/list/1')
        .then(({ data, code, msg }: resBody<any[]>) => {
          console.log(data);
        });
    });
  }
}
