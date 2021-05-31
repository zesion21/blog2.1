import { Injectable } from '@angular/core';
import { HttpClient } from '_@angular_common@11.2.14@@angular/common/http';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root',
})
export class ApiFetchService {
  constructor(private http: HttpClient, private url: UrlService) {}

  public getAllType() {
    return this.http.get(`${this.url.ajaxUrl}/type/allType`).toPromise();
  }

  public get(url) {
    return this.http.get(`${this.url.ajaxUrl}${url}`).toPromise();
  }
}
export interface resBody<T> {
  code: number;
  msg: string;
  data: T;
}
