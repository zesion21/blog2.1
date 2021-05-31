import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor() {}
  public arcgisApiUrl: string = 'http://zesionlee.com/API/arcgis/3.32/init.js';
  public ajaxUrl: string = 'http://127.0.0.1:8086/tp';
}
