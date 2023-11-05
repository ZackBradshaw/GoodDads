import { Component } from '@angular/core';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GoodDads';

  constructor(private oneSignal: OneSignal) {
    this.oneSignal.init({
      appId: "6a53b7d3-7922-41a5-9f32-08e82fc25322",
    });
  }

}


