import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class SplashScreenComponent {
  windowWidth!: string
  showSplash = true

  constructor() { }

  check() {
    this.windowWidth = `-${window.innerWidth+1000}px`
    setTimeout(() => {
      this.showSplash = !this.showSplash;
    }, 1500);
  }
}
