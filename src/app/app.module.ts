import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './Components/cards/cards.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UsersComponent } from './Components/users/users.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainTabComponent } from './Components/main-tab/main-tab.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatButtonToggleModule, MatButtonToggleGroup } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NavbarComponent,
    UsersComponent,
    CoursesComponent,
    MainTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatPaginatorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
