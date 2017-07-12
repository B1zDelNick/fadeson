/*--------------------------------------------------------------
 ## Core
 --------------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';

/*--------------------------------------------------------------
 ## Custom
 --------------------------------------------------------------*/
import { PostsRoutingModule } from './posts-routing.module';

/*--------------------------------------------------------------
 ## Components
 --------------------------------------------------------------*/
import { PostsComponent } from './posts.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsHomeComponent } from './posts-home/posts-home.component';

/*--------------------------------------------------------------
 ## Providers
 --------------------------------------------------------------*/
import {PostService} from './post.service';
import { PostSingleComponent } from './post-single/post-single.component';
import { PostPreviewComponent } from './posts-list/post-preview/post-preview.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostsListComponent,
    PostsHomeComponent,
    PostSingleComponent,
    PostPreviewComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpModule
  ],
  providers: [PostService]
})
export class PostsModule { }
