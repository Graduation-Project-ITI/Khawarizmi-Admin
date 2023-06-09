import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';


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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SigninadminComponent } from './Components/signinadmin/signinadmin.component';
import { SignupadminComponent } from './Components/signupadmin/signupadmin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ErrorComponent } from './Components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NavbarComponent,
    UsersComponent,
    CoursesComponent,
    MainTabComponent,
    SigninadminComponent,
    SignupadminComponent,
    DashboardComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
