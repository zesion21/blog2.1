import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '_@angular_common@11.2.14@@angular/common/http';
import { ApiFetchService, resBody } from '../../service/api-fetch.service';
import { EventbusService } from '../../service/eventbus.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  @Input() showRoutr: boolean;
  @Output() showRoutrChange = new EventEmitter();
  constructor(
    public eventBus: EventbusService,
    private apiFetch: ApiFetchService
  ) {}

  ngOnInit(): void {
    this.eventBus.scroll.subscribe((r: number) => {
      this.scrollY = r;
    });
    this.getList();
  }

  meneList = [];
  async getList() {
    this.apiFetch.getAllType().then(({ data, code }: resBody<any[]>) => {
      if (code == 200) {
        this.meneList = data;
      }
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
