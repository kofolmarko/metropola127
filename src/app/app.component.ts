import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'metropola127';

  targetDate: Date = new Date(2024, 3, 28, 25, 0);

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit() {
    const now = new Date();
    const difference = this.targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      // Target date has passed, set all values to 0
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      return;
    }

    const seconds = Math.floor(difference / 1000);
    this.days = Math.floor(seconds / (3600 * 24));
    this.hours = Math.floor((seconds % (3600 * 24)) / 3600);
    this.minutes = Math.floor((seconds % 3600) / 60);
    this.seconds = Math.floor(seconds % 60);
  }
}
