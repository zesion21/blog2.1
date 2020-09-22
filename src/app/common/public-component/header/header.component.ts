import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { EventbusService } from '../../service/eventbus.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  @Input() showRoutr: boolean;
  @Output() showRoutrChange = new EventEmitter();
  constructor(public eventBus: EventbusService) {}

  ngOnInit(): void {
    this.eventBus.scroll.subscribe((r: number) => {
      this.scrollY = r;
    });
  }
  preventA(evt, url?: string) {
    evt.preventDefault();
    if (url) open(url);
  }

  jumpReload() {
    this.showRoutrChange.emit(false);
    const t = setTimeout(() => {
      this.showRoutrChange.emit(true);
      clearTimeout(t);
    });
  }
  scrollY = 0;
}
