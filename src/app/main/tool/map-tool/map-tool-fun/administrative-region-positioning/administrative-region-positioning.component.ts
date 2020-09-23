import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EsriService } from 'src/app/common/service/esri.service';

@Component({
  selector: 'app-administrative-region-positioning',
  templateUrl: './administrative-region-positioning.component.html',
  styleUrls: ['./administrative-region-positioning.component.less'],
})
export class AdministrativeRegionPositioningComponent implements OnInit {
  constructor(private http: HttpClient, private esri: EsriService) {}

  ngOnInit(): void {
    this.getListByKeyword('中国', 'provinceList');
    this.esri.amap2Geometry('');
  }
  provinceList = [];
  cityList = [];
  districtList = [];
  selectProvince: any;
  selectCity: any;
  selectdistrict: any;

  provinceChange(code) {
    this.cityList = [];
    this.districtList = [];
    this.getListByKeyword(code, 'cityList');
  }
  cityChange(code) {
    this.selectdistrict = undefined;
    this.getListByKeyword(code, 'districtList');
  }
  districtChange(code) {
    this.getListByKeyword(code, '');
  }
  getListByKeyword(keywords, key) {
    this.http
      .get(`https://restapi.amap.com/v3/config/district`, {
        params: {
          key: 'b959ec91ed73bce3c6ecfc635f06932d',
          keywords,
          subdistrict: key ? '1' : '0',
          extensions: 'all',
        },
      })
      .subscribe(({ districts, info }: any) => {
        if (info == 'OK') {
          if (key) {
            this[key] = districts[0]['districts'];
            this[key].sort((a, b) => a.adcode - b.adcode);
          }
          this.addToMap(districts[0]['polyline']);
        }
      });
  }
  addToMap(poline) {
    this.esri.map.graphics.clear();
    const gemrtry = this.esri.amap2Geometry(poline);
    const sfs = this.esri.createSymbol();
    this.esri.map.graphics.add(new this.esri.Graphic(gemrtry, sfs));
    this.esri.map.setExtent(gemrtry.getExtent().expand(2));
  }
}
