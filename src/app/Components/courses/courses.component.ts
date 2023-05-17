import { Component } from '@angular/core';
import {FormControl} from '@angular/forms'

export interface Course {
  name: string;
  publisher: string;
  upVotes: number;
  downVotes: number;
  netVotes: number;
  numberOfLessons: number;
  isPublished: boolean;
  date: string;
}

const ELEMENT_DATA: Course[] = [
  {name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, isPublished:true, date: '12/10/2000'},
  {name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, isPublished:true, date: '12/10/2000'},
  {name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, isPublished:true, date: '12/10/2000'},
  {name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, isPublished:true, date: '12/10/2000'},
  {name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, isPublished:true, date: '12/10/2000'},
  {name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, isPublished:true, date: '12/10/2000'},
  {name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, isPublished:true, date: '12/10/2000'},
  {name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, isPublished:true, date: '12/10/2000'},
  {name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, isPublished:true, date: '12/10/2000'},
  {name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, isPublished:true, date: '12/10/2000'},
  {name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, isPublished:true, date: '12/10/2000'},
];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  displayedColumns: string[] = ['name', 'publisher', 'upVotes','downVotes', 'netVotes', 'numberOfLessons', 'isPublished', 'date'];
  dataSource = ELEMENT_DATA;
  courseFilterBy = new FormControl('');

}
