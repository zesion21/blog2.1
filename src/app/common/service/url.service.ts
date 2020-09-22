import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor() {}
  public arcgisApiUrl: string = 'http://zesionlee.com/API/arcgis/3.32/init.js';
}
