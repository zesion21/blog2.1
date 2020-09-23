import { Component, OnInit } from '@angular/core';
import { EsriService } from 'src/app/common/service/esri.service';

@Component({
  selector: 'app-map-tool-menu',
  templateUrl: './map-tool-menu.component.html',
  styleUrls: ['./map-tool-menu.component.less'],
})
export class MapToolMenuComponent implements OnInit {
  constructor(private esri: EsriService) {}

  ngOnInit(): void {}
  setSelectMenu(evnetName: string) {
    this.esri.mapEventName = evnetName;
  }
}
