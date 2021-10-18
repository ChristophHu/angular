import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesDataService } from './services/course-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  isLoading$: Observable<boolean>

  constructor(private coursesDataService: CoursesDataService) {
    this.isLoading$ = this.coursesDataService.isLoading$()
  }

  ngOnInit(): void {
    this.coursesDataService.getAll()
  }
}
