import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'zesion-lee';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get('http://127.0.0.1:3600/api/getTagList.php')
      .subscribe(({ code, data }: any) => {
        console.log(data);
      });
  }
}
