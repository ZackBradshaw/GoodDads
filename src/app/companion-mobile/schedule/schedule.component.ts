import { Component, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnDestroy {
  formUrls = [
    'https://docs.google.com/forms/d/e/1FAIpQLScsqe3acfefC-tqL1-J4PJOVnATQ8iN-m0hBT9RLYM3VHnlkA/viewform?usp=sf_link',
    'https://docs.google.com/forms/d/e/1FAIpQLScsqe3acfefC-tqL1-J4PJOVnATQ8iN-m0hBT9RLYM3VHnlkA/viewform?usp=sf_link',
  ];
  currentFormIndex: number | null = 0;
  formCompleted = false;
  formTimeout: any;
  delayTimeout: any;
  displayDelay = false;
  remainingTime = 180;
  nextFormTime = 600; 
  safeUrls: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.formUrls.forEach(url => {
      this.safeUrls.push(this.sanitizer.bypassSecurityTrustResourceUrl(url))
    });
    this.formTimeout = setTimeout(() => this.nextForm(), this.remainingTime * 1000);
    setInterval(() => {
      if (this.remainingTime > 0) this.remainingTime--;
      if (this.displayDelay && this.nextFormTime > 0) this.nextFormTime--;
    }, 1000);
  }

  ngOnDestroy() {
    clearTimeout(this.formTimeout);
    clearTimeout(this.delayTimeout);
  }

  nextForm() {
    this.displayDelay = true;
    this.currentFormIndex = null;
    console.log('Current form index:', this.currentFormIndex); // Add this line
    console.log('Current form URL:', this.safeUrls[this.currentFormIndex]); // And this line
    this.remainingTime = 180; 
    this.delayTimeout = setTimeout(() => {
      this.currentFormIndex = ((this.currentFormIndex || 0) + 1) % this.safeUrls.length;
      this.formCompleted = false;
      this.displayDelay = false;
      this.nextFormTime = 600; 
      clearTimeout(this.formTimeout);
      this.formTimeout = setTimeout(() => this.nextForm(), this.remainingTime * 1000);
    }, this.nextFormTime * 1000);
  }

  checkFormCompletion(frame: HTMLIFrameElement) {
    const frameDoc = frame.contentDocument || frame.contentWindow?.document;
    if (frameDoc) {
      this.formCompleted = frameDoc.body.textContent?.includes('Your response has been recorded.') || false;
      if (this.formCompleted) {
        this.nextForm();
      }
    }
  }
}

