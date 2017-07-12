/*--------------------------------------------------------------
 ## Core
 --------------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*--------------------------------------------------------------
 ## Components
 --------------------------------------------------------------*/
import {PostsComponent} from './posts.component';
import {PostsHomeComponent} from './posts-home/posts-home.component';
import {PostSingleComponent} from './post-single/post-single.component';

const routes: Routes = [
  {path: 'posts', component: PostsComponent, children: [
      {path: '', component: PostsHomeComponent, pathMatch: 'full' },
      {path: ':slug', component: PostSingleComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
