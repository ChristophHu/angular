import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  checklistStatus: any[] = [
    { value: 15, description: 'vollständig' },
    { value: 5, description: 'unvollständig' },
    { value: 3, description: 'relevant' },
  ]
}
