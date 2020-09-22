import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit {
  constructor(public router: Router) {}
  showRoutr: boolean = true;
  ngOnInit(): void {}
  get routerUrl() {
    return this.router.url;
  }
  get ifMap() {
    return this.routerUrl.includes('mapTool');
  }
}
