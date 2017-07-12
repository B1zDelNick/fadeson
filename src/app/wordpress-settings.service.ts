import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import {IMenu} from './shared/domain/IMenu';

@Injectable()
export class WordpressSettingsService {

  private menus: Observable<IMenu[]>;
  
  constructor(http: Http) {
    this.menus = http.get(MENUS_URL)
      .map((res: Response) => res.json())
      .catch((err: Response | any) => {
        console.error(err)
        return Observable.throw(err);
      })
      .mergeMap(data => {
        let queries = [];
        for (let it of data)
          queries.push(http.get(`${MENUS_URL}/${it.ID}`));
        return Observable.forkJoin(queries);
      })
      .map((data: Response[]) => {
        let arr = [];
        for (let it of data) arr.push(it.json());
        return arr;
      })
      .catch((err: Response | any) => {
        console.error(err)
        return Observable.throw(err);
      });
  }
  
  public getMenus = () => this.menus;
}

export const BASE_URL = 'http://localhost/wp-angular-theme/wp-json/wp-api-menus/v2';
export const MENUS_URL = `${BASE_URL}/menus`;
