import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
import { PageEvent } from '@angular/material/paginator';
import { CoursesService } from 'src/Services/courses.service';

export interface Course {
  id: number;
  name: string;
  publisher: string;
  upVotes: number;
  downVotes: number;
  netVotes: number;
  date: string;
}

const ELEMENT_DATA: Course[] = [
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 1, name: 'Hydrogen', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
];

const ELEMENT_DATA2: Course[] = [
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
  {id: 100, name: 'hamada', publisher: 'abdallah', upVotes: 500, downVotes: 100, netVotes: 400, date: '12/10/2000'},
];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  displayedColumns: string[] = ['id','name', 'publisher', 'upVotes','downVotes', 'netVotes','date','delete'];
  dataSource: any;
  orderBy = new FormControl('');
  searchBy: string = '';

  pageSize: number = 8;
  pageIndex: number = 0;
  length: number | null = null;
  page: PageEvent | null = null;

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    // get the first chunk of data, store it in data source and update the data length 
    this.courseService.getCourses(this.pageIndex, this.pageSize, this.searchBy, this.orderBy.value!).subscribe({
      next: (res:any )=> {
        this.dataSource = res.data
        this.length = res.length
      },
      error: err => console.log(err)
    });
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex

    // get the next or prev page
    this.courseService.getCourses(this.pageIndex, this.pageSize, this.searchBy, this.orderBy.value!).subscribe({
      next: (res:any) => {
        this.dataSource = res.data
        this.length = res.length
      },
      error: err => console.log(err)
    })
  }

  deleteCourse(id: any) {

  }

}
