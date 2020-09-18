import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const year = new Date().getFullYear();
    this.lastYear = year > 2020 ? '~' + year : '';
  }
  lastYear: any;
}
