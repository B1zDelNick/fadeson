import {Component, OnInit, Output} from '@angular/core';
import {WordpressSettingsService} from '../../wordpress-settings.service';
import {Observable} from 'rxjs';
import {IMenu} from '../domain/IMenu';
import {IMenuItem} from '../domain/IMenuItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() menuItems: IMenuItem[];
  
  constructor(private settings: WordpressSettingsService) {
    //this.menuItems = this.settings.getItemsFor('navbar');
    /*this.menuItems = [
      {id:1, classes:"",url:"",order:3, title:'Sample Page', xfn:'page'},
      {id:2, classes:"",url:"",order:2, title:'Posts', xfn:'posts'},
      {id:3, classes:"",url:"",order:1, title:'Home', xfn:'home'}
    ];*/
    
    settings.getMenus()
      .subscribe(res => {
        for (let m of res) {
          if (m.slug === 'navbar') {
            
            this.menuItems = m.items;
            console.log(this.menuItems);
            
            break;
          }
        }
      });
  }

  ngOnInit() {}
}
