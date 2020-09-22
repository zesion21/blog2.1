import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventbusService {
  constructor() {
    this.bindScroll();
  }
  scroll = new Subject();
  bindScroll() {
    let t: any = null;
    window.onscroll = () => {
      if (!t) {
        t = setTimeout(() => {
          clearTimeout(t);
          t = null;
          this.scroll.next(window.scrollY);
        }, 300);
      }
    };
  }
}
