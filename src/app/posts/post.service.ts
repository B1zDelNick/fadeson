/*--------------------------------------------------------------
 ## Core
 --------------------------------------------------------------*/
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

/*--------------------------------------------------------------
 ## RxJs
 --------------------------------------------------------------*/
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {IPost} from './domain/IPost';

@Injectable()
export class PostService {

  private BASE_REST_URL = '//localhost/wp-angular-theme/wp-json/wp/v2';
  private POSTS = '/posts';

  constructor(private http: Http) { }

  getPosts(): Observable<IPost[]> | any {
    return this.http
      .get(this.BASE_REST_URL + this.POSTS)
      .map((res: Response) => res.json())
      .catch((err: Response | any) => {
        console.error(err)
        return Observable.throw(err);
      });
  }

  getPost(slug): Observable<IPost> | any {
    return this.http
      .get(this.BASE_REST_URL + this.POSTS + `?slug=${slug}`)
      .map((res: Response) => res.json())
      .catch((err: Response | any) => {
        console.error(err)
        return Observable.throw(err);
      });
  }

  test(): Observable<IPost[]> {
    const apiURL = this.BASE_REST_URL + this.POSTS;
    return this.http.get(apiURL)
      .map(res => {
        console.log(res.json()[0].title);
        return res.json();
      });
  }
}
