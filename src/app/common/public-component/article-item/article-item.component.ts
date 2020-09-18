import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.less'],
})
export class ArticleItemComponent implements OnInit {
  constructor(private router: Router) {}
  articleItem = {
    title: '这是一个测试文章标题',
    description:
      '1931年9月18日夜，盘踞在中国东北的日本关东军按照精心策划的阴谋，由铁道“守备队”炸毁沈阳柳条湖附近日本修筑的南满铁路路轨，并嫁祸于中国军队，日军以此为借口，炮轰中国东北军北大营，制造了震惊中外的“九一八事变”。次日，日军侵占沈阳，又陆续侵占了东北三省。1932年2月，东北全境沦陷。此后，日本在中国东北建立了伪满洲国傀儡政权，开始了对东北人民长达14年之久的奴役和殖民统治，使东北3000多万同胞饱受亡国奴的痛苦滋味',
    tag: 'PHP',
    time: '2020-02-10',
    see: 20,
    id: 5,
  };
  ngOnInit(): void {}
  jump2Detail(id) {
    this.router.navigateByUrl(`main/articleDetail/${id}`);
  }
}
