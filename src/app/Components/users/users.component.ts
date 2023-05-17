import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface User {
  id: string;
  name: string;
  coursesCreated: number;
  bookmarks: number;
  learning: number;
}

const ELEMENT_DATA: User[] = [
  {id: '1',name: 'Hydrogen', coursesCreated: 2, bookmarks: 5, learning: 1},
  {id: '1',name: 'Hydrogen', coursesCreated: 2, bookmarks: 5, learning: 1},
  {id: '1',name: 'Hydrogen', coursesCreated: 2, bookmarks: 5, learning: 1},
  {id: '1',name: 'Hydrogen', coursesCreated: 2, bookmarks: 5, learning: 1},
  {id: '1',name: 'Hydrogen', coursesCreated: 2, bookmarks: 5, learning: 1},
  {id: '1',name: 'Hydrogen', coursesCreated: 2, bookmarks: 5, learning: 1},
  {id: '1',name: 'Hydrogen', coursesCreated: 2, bookmarks: 5, learning: 1},
  {id: '1',name: 'Hydrogen', coursesCreated: 2, bookmarks: 5, learning: 1},
  {id: '1',name: 'Hydrogen', coursesCreated: 2, bookmarks: 5, learning: 1},
  {id: '1',name: 'Hydrogen', coursesCreated: 2, bookmarks: 5, learning: 1},
];


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  displayedColumns: string[] = ['id' ,'name', 'coursesCreated', 'bookmarks','learning', 'removeUser'];
  dataSource = ELEMENT_DATA;
  userFilteredBy = new FormControl('');

  removeUser(id: string) {

  }

}
