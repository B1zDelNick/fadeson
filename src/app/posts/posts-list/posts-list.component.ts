import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPost } from '../domain/IPost';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {

  private loading = false;
  sub: Subscription = null;
  posts: IPost[]; // Observable<IPost[]>;
  error = '';

  constructor( private postService: PostService, private router: Router, private route: ActivatedRoute ) {
    // this.observable = this.getObservable();
    // this.doSearch();
    this.getPosts();
  }

  ngOnInit() {
    // this.getPosts();
    // this.doSearch();
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  getPosts() {
    this.sub = this.postService
      .getPosts()
      .subscribe(res => {
        // success
        this.posts = res;
        this.error = '';
        // console.log(res);
      }, err => {
        // error
        this.error = err;
      });
  }

  selectPost(slug) {
    this.router.navigate([slug], {relativeTo: this.route});
  }
}
