import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
import { PageEvent } from '@angular/material/paginator';

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
];

const ELEMENT_DATA2: Course[] = [
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, numberOfLessons:12, date: '12/10/2000'},
];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  displayedColumns: string[] = ['name', 'publisher', 'upVotes','downVotes', 'netVotes', 'numberOfLessons', 'date','delete'];
  // dataSource = ELEMENT_DATA;
  dataSource: any;
  courseFilterBy = new FormControl('');

  pageSize: number | null = 10;
  pageIndex: number | null = 0;
  length: number | null = null;
  page: PageEvent | null = null;

  ngOnInit(): void {
    // get the first chunk of data (ex:8)
    // update the data source

    // res -> 
    this.dataSource = ELEMENT_DATA;
    this.length = 30;
  }

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize
    this.pageIndex = e.pageIndex
    

    console.log('page event fired');
    console.log(e);

    // request with page number (ex:2)
    // update the data source

    this.dataSource = ELEMENT_DATA2
  }

  deleteCourse(id: any) {

  }

}
