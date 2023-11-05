import { Component, Inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-survey-view',
  templateUrl: './survey-view.component.html',
  styleUrls: ['./survey-view.component.css']
})
export class SurveyViewComponent {
  formUrls = [
    'https://docs.google.com/forms/d/e/1FAIpQLScvHlYAVEJ8C_Fez-uJfjEUd4mWiFEeXFZ0Xqhr23dqEU2AtA/viewform?usp=sf_link',
    'https://docs.google.com/forms/d/e/1FAIpQLSfgaajToahtbTtIW7FGF6ZvW6lIxYZ2lFMel_oz-o1UCeizCw/viewform?usp=sf_link',
    'https://docs.google.com/forms/d/e/1FAIpQLSdUfh5IYOW8x42VnNDLwx-kwGutigCzfv5yyeDpk5FhKuSDBw/viewform?usp=sf_link',
    'https://docs.google.com/forms/d/e/1FAIpQLSc8k-w12pdoIMDMVK4iu6bKeqQ20KTrRpZ9PkoCB1WkNycRfw/viewform?usp=sf_link',
    'https://docs.google.com/forms/d/e/1FAIpQLSc9CCDXLDcV5F6nZOMuvi50UfrlsiVvCnwE-pfZvNppIhD5VQ/viewform?usp=sf_link',
    'https://docs.google.com/forms/d/e/1FAIpQLSdMBu04oDi9KjihJyL6hXgGH6moVZc1EvHB9uIQhgAEW4nH0A/viewform?usp=sf_link',
    'https://docs.google.com/forms/d/e/1FAIpQLScFli22vWHAKvJPkw3wzzeMCl2rqo19gMFfM1wA5whU9l7sLA/viewform?usp=sf_link',
    'https://docs.google.com/forms/d/e/1FAIpQLSeQ0vPirvdXNDwE7m4fWjMWpIN6cj7M-1oCbKMqh_eyI2j_Cg/viewform?usp=sf_link',
    'https://docs.google.com/forms/d/e/1FAIpQLScV-hPH-e-3npigwsD1NcqbsBKGMzg2zQfUgyyck3WOKvUYGA/viewform?usp=sf_link',
    'https://docs.google.com/forms/d/e/1FAIpQLSe7ztbQDoTX4MYHePSgLbzdd3p-ANnbzZ1FYPubKvoESpfJCQ/viewform?usp=sf_link',
    'https://docs.google.com/forms/d/e/1FAIpQLSfjrnkkRfutYxmZSRcDbiwpcX3TlqJ4-AiVv6O9FOODJVAgEA/viewform?usp=sf_link',
    'https://docs.google.com/forms/d/e/1FAIpQLScYkcayvppW4iQGQpX59Ajb0hT0BqfhN9deH_N-Gs5rYdOPpw/viewform?usp=sf_link',
    'https://docs.google.com/forms/d/e/1FAIpQLSe98fEtojkLw5yD1pn0JNUO5Jql807xHQHsWSI438FFSk8Ldg/viewform?usp=sf_link',
    'https://docs.google.com/forms/d/e/1FAIpQLSfhA46fhwAdZiL9Bujz9Wx686wmLY_zls0y1u3DzWOXkxNz8Q/viewform?usp=sf_link',
  ];
  currentFormIndex: number | null = 0;
  formCompleted = false;
  formTimeout: any;
  delayTimeout: any;
  displayDelay = false;
  remainingTime = 180;
  nextFormTime = 600;
  safeUrls: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer, @Inject(MAT_DIALOG_DATA) private data:any ) {
    console.log(data)
    this.currentFormIndex = data.id
    this.formUrls.forEach(url => {
      this.safeUrls.push(this.sanitizer.bypassSecurityTrustResourceUrl(url))
    });

  }

  ngOnInit() {
    const storedIndex = localStorage.getItem('currentFormIndex');
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
  this.currentFormIndex = ((this.currentFormIndex || 0)) % this.safeUrls.length;
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
