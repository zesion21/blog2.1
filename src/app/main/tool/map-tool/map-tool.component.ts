import { Component, OnInit } from '@angular/core';
import { EsriService } from 'src/app/common/service/esri.service';
import { isLoaded } from 'esri-loader';
@Component({
  selector: 'app-map-tool',
  templateUrl: './map-tool.component.html',
  styleUrls: ['./map-tool.component.less'],
})
export class MapToolComponent implements OnInit {
  constructor(private esri: EsriService) {}

  ngOnInit(): void {
    this.initmap();
  }
  async apiInit() {
    await this.esri.initEsriApi();
  }
  async initmap() {
    if (!isLoaded()) {
      await this.apiInit();
    }
    this.esri.map = new this.esri.Map('map', {
      basemap: 'topo',
      minZoom: 3,
      center: [116.3683244, 39.915085],
    });
  }
}
