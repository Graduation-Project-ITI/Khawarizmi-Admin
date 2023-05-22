import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { AdminService } from 'src/Services/AdminService/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'coursesCreated',
    'bookmarks',
    'learning',
    'removeUser',
  ];
  dataSource: any;
  searchByControl = new FormControl('');
  orderByControl = new FormControl('');

  pageSize: number = 8;
  pageIndex: number = 0;
  length: number = 0;
  page: PageEvent | null = null;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    // get the first chunk of data
    this.getPage();
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex;

    // get the next or prev page
    this.getPage();
  }

  changeOrder() {
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

  removeUser(id: string) {

  }
}
