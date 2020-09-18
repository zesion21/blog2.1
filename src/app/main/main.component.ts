import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit {
  constructor(private router: Router) {}
  showRoutr: boolean = true;
  ngOnInit(): void {}
  get routerUrl() {
    const arr = ['/main/articleDetail'];
    return arr.some((item) => this.router.url.includes(item));
  }
}
