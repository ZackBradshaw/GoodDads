// src/app/admin-web/dashboard/dashboard.component.ts
import { DataService } from 'src/app/data.service';
import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  @ViewChild('chart', { static: true }) chart: ElementRef;

  formUrls = [
    'https://docs.google.com/forms/d/197XW6Wq5ZvxT-9abFD-W2kp9Nndk6_IMBeyRzQ1sFwk/edit#responses',
    'https://docs.google.com/forms/d/1d0qh9bBoEjUhEb7Xhf9eJa3NMXpZkVXNhdmFgine7_0/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSdUfh5IYOW8x42VnNDLwx-kwGutigCzfv5yyeDpk5FhKuSDBw/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSc8k-w12pdoIMDMVK4iu6bKeqQ20KTrRpZ9PkoCB1WkNycRfw/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSc9CCDXLDcV5F6nZOMuvi50UfrlsiVvCnwE-pfZvNppIhD5VQ/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSdMBu04oDi9KjihJyL6hXgGH6moVZc1EvHB9uIQhgAEW4nH0A/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLScFli22vWHAKvJPkw3wzzeMCl2rqo19gMFfM1wA5whU9l7sLA/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSeQ0vPirvdXNDwE7m4fWjMWpIN6cj7M-1oCbKMqh_eyI2j_Cg/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLScV-hPH-e-3npigwsD1NcqbsBKGMzg2zQfUgyyck3WOKvUYGA/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSe7ztbQDoTX4MYHePSgLbzdd3p-ANnbzZ1FYPubKvoESpfJCQ/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSfjrnkkRfutYxmZSRcDbiwpcX3TlqJ4-AiVv6O9FOODJVAgEA/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLScYkcayvppW4iQGQpX59Ajb0hT0BqfhN9deH_N-Gs5rYdOPpw/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSe98fEtojkLw5yD1pn0JNUO5Jql807xHQHsWSI438FFSk8Ldg/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSfhA46fhwAdZiL9Bujz9Wx686wmLY_zls0y1u3DzWOXkxNz8Q/edit#responses',
  ];
  safeUrls: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {
    this.formUrls.forEach(url => {
      this.safeUrls.push(this.sanitizer.bypassSecurityTrustResourceUrl(url))
    });
  }

  ngOnInit() {

    this.http.get<any[]>('http://localhost:3000/sheets').subscribe(data => {
      console.log(data);
      const chart = new Chart(this.chart.nativeElement, {
        type: 'bar',
        data: {
          labels: data.map(item => item[0]),
          datasets: [{
            data: data.map(item => item[1])
          }]
        }
      })
    })
  }
}


