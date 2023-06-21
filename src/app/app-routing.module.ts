import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './Components/cards/cards.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UsersComponent } from './Components/users/users.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { SigninadminComponent } from './Components/signinadmin/signinadmin.component';
import { SignupadminComponent } from './Components/signupadmin/signupadmin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ErrorComponent } from './Components/error/error.component';

const routes: Routes = [
  //{path: 'cards', component: CardsComponent},
  //{path: 'navbar', component: NavbarComponent},
  //{path: 'users', component: UsersComponent},
  //{path: 'courses', component: CoursesComponent},
  {path:'',component:SigninadminComponent},
  {path:'signin',component:SigninadminComponent},
  {path:'signup',component:SignupadminComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
