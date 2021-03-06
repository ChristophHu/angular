import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class SplashScreenComponent implements OnInit {
  windowWidth!: string
  showSplash = true

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.windowWidth = `-${window.innerWidth+300}px`

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 500);
    }, 3000);
  }

  // check() {
  //   this.windowWidth = `-${window.innerWidth+300}px`
  //   setTimeout(() => {
  //     this.showSplash = !this.showSplash;
  //   }, 1500);
  // }
}
