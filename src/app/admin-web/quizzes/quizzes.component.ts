import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SurveyViewComponent } from '../surveys/survey-view/survey-view.component';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent {
  currentFormIndex: number | null = 0;
  formCompleted = false;
  formTimeout: any;
  delayTimeout: any;
  displayDelay = false;
  remainingTime = 180;
  nextFormTime = 600;
  id:number;




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

  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog) {
    this.formUrls.forEach(url => {
      this.safeUrls.push(this.sanitizer.bypassSecurityTrustResourceUrl(url))
    });


  }
  openNew(id:number):void {
    this.id = id
    const dialogRef = this.dialog.open(SurveyViewComponent, {
      height: '45.25em',
      width: '68.125em',
      data: {
        id: id
      }
    });


  }

  ngOnInit() {
    const storedIndex = localStorage.getItem('currentFormIndex');
    if (storedIndex) {
      this.currentFormIndex = Number(storedIndex);
    }
    const storedTime = localStorage.getItem('nextFormTime');
    if (storedIndex) {
      this.currentFormIndex = Number(storedIndex);
    }
    if (storedTime) {
      const delay = Number(storedTime) - Date.now();
      if (delay > 0) {
        this.nextFormTime = delay / 1000;
      }
    }
    this.nextForm();
  }




  ngOnDestroy() {
    clearTimeout(this.formTimeout);
    clearTimeout(this.delayTimeout);
  }

startTimer() {
  this.formTimeout = setInterval(() => {
    if (this.nextFormTime > 0) {
      this.nextFormTime--;
    } else {
      clearInterval(this.formTimeout);
      this.nextForm();
    }
  }, 1000);
}

nextForm() {
  this.displayDelay = true;
  this.currentFormIndex = ((this.currentFormIndex || 0) + 1) % this.safeUrls.length;
  console.log('Current form index:', this.currentFormIndex);
  console.log('Current form URL:', this.safeUrls[this.currentFormIndex]);
  this.formCompleted = false;
  this.displayDelay = false;
  this.nextFormTime = 600;
  this.startTimer();
  localStorage.setItem('currentFormIndex', String(this.currentFormIndex));
  localStorage.setItem('nextFormTime', String(this.nextFormTime));
}
  checkFormCompletion(frame: HTMLIFrameElement) {
    const frameDoc = frame.contentDocument || frame.contentWindow?.document;
    if (frameDoc) {
      this.formCompleted = frameDoc.body.textContent?.includes('Your response has been recorded.') || false;
      if (this.formCompleted && this.nextFormTime === 0) {
        this.nextForm();
      }
    }
  }

}
