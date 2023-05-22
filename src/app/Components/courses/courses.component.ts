import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { AdminService } from 'src/Services/AdminService/admin.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'publisher',
    'upVotes',
    'downVotes',
    'netVotes',
    'date',
    'delete',
  ];
  dataSource: any;
  orderByControl = new FormControl('');
  searchByControl = new FormControl('');

  pageSize: number = 8;
  pageIndex: number = 0;
  length: number = 0;
  page: PageEvent | null = null;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    // get the first chunk of data then store it in data source and update the data length
    this.getPage();
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex;

    // get the next or prev page
    this.getPage();
  }

  changeOrder() {
    console.log(this.orderByControl.value);

    this.getPage();
  }

  search() {
    this.getPage();
  }

  getPage() {
    this.adminService
      .getPages(
        this.pageIndex,
        this.pageSize,
        this.searchByControl.value!,
        this.orderByControl.value!
      )
      .subscribe({
        next: (res: any) => {
          this.dataSource = res.data;
          this.length = res.length;
        },
        error: (err) => console.log(err),
      });
  }

  deleteCourse(id: any) {
    console.log(id);

    this.adminService.deleteCourse(id).subscribe({
      next: (res: any) => {
        this.dataSource = this.dataSource.filter((c: any) => c.id != id);
        this.length--;
      },
      error: (err) => console.log(err),
    });
  }
}
