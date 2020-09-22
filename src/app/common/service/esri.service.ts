import { Injectable } from '@angular/core';
import { loadCss, loadModules, loadScript } from 'esri-loader';
import { UrlService } from './url.service';
@Injectable({
  providedIn: 'root',
})
export class EsriService {
  constructor(private url: UrlService) {}
  //实例
  map: any;

  //API
  Map: any;
  Polygon: any;
  SimpleFillSymbol: any;
  SimpleLineSymbol: any;
  Color: any;
  Graphic: any;
  async initEsriApi(): Promise<any> {
    const cssUrl = this.url.arcgisApiUrl.replace(
      'init.js',
      'esri/css/esri.css'
    );
    loadCss(cssUrl);
    [
      this.Map,
      this.Polygon,
      this.SimpleFillSymbol,
      this.SimpleLineSymbol,
      this.Color,
      this.Graphic,
    ] = await loadModules(
      [
        'esri/map',
        'esri/geometry/Polygon',
        'esri/symbols/SimpleFillSymbol',
        'esri/symbols/SimpleLineSymbol',
        'esri/Color',
        'esri/graphic',
      ],
      {
        url: this.url.arcgisApiUrl,
      }
    );
  }

  amap2Geometry(points: string) {
    let arr1 = points.split('|');
    const resilt = [];
    for (let item of arr1) {
      const b1 = [];
      for (let val of item.split(';')) {
        const buffer = val.split(',');
        b1.push([+buffer[0], +buffer[1]]);
      }
      resilt.push(b1);
    }
    return new this.Polygon({
      rings: resilt,
      spatialReference: { wkid: 4326 },
    });
  }

  createSymbol() {
    return new this.SimpleFillSymbol(
      this.SimpleFillSymbol.STYLE_SOLID,
      new this.SimpleLineSymbol(
        this.SimpleLineSymbol.SOLID,
        new this.Color([255, 0, 0]),
        2
      ),
      new this.Color([255, 255, 0, 0.25])
    );
  }
}
