import { Component } from '@angular/core';
import {FormControl} from '@angular/forms'

export interface Course {
  id: number;
  name: string;
  publisher: string;
  upVotes: number;
  downVotes: number;
  netVotes: number;
  numberOfLessons: number;
  date: string;
}

const ELEMENT_DATA: Course[] = [
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  displayedColumns: string[] = ['name', 'publisher', 'upVotes','downVotes', 'netVotes', 'numberOfLessons', 'date','delete'];
  dataSource = ELEMENT_DATA;
  courseFilterBy = new FormControl('');

  deleteCourse(id: any) {

  }
}
