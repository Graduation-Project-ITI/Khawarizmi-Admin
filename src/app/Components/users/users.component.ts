import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { AdminService } from 'src/app/Services/AdminService/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'email',
    'coursesCreated',
    'removeUser',
  ];
  dataSource: any;
  searchByControl = new FormControl('');
  orderByControl = new FormControl('');
  isLoading: boolean = true;
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
    console.log(e);

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
      .getUsersPages(
        this.pageIndex,
        this.pageSize,
        this.searchByControl.value!,
        this.orderByControl.value!
      )
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.isLoading = false;
          this.dataSource = res.data;
          this.length = res.length;
        },
        error: (err) => console.log(err),
      });
  }

  removeUser(id: string) {
    this.adminService.deleteUser(id).subscribe({
      next: (res) => {
        this.dataSource = this.dataSource.filter((u: any) => u.id != id);
      },
    });
  }
}
