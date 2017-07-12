/*--------------------------------------------------------------
 ## Core
 --------------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*--------------------------------------------------------------
 ## Components
 --------------------------------------------------------------*/
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'posts', redirectTo: '/posts' },
  {path: 'home', component: HomeComponent },
  {path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
