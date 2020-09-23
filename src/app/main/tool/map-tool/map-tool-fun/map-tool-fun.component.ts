import { Component, OnInit } from '@angular/core';
import { EsriService } from 'src/app/common/service/esri.service';

@Component({
  selector: 'app-map-tool-fun',
  templateUrl: './map-tool-fun.component.html',
  styleUrls: ['./map-tool-fun.component.less'],
})
export class MapToolFunComponent implements OnInit {
  constructor(public esri: EsriService) {}

  ngOnInit(): void {}
  closeEvent() {
    this.esri.mapEventName = '';
    this.esri.map.centerAndZoom([116.3683244, 39.915085], 3);
    this.esri.map.graphics.clear();
  }
}
