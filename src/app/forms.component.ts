import { Component, OnInit } from '@angular/core';
import { google } from 'googleapis';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  private forms = google.forms('v1');

  constructor() { }

  ngOnInit() {
    this.forms.forms.list({
      auth: 'YOUR_API_KEY'
      q: "mimeType='application/vnd.google-apps.for"
    }, (err, res) => {
      if (err) {
        console.error('The API returned an error: ' + err);
        return;
      }
      const forms = res.data.items;
      if (forms.length) {
        console.log('Forms:');
        forms.forEach((form) => {
          console.log(`${form.title} (${form.id})`);
        });
      } else {
        console.log('No forms found.');
      }
    });
  }
}
