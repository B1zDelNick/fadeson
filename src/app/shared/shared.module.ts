/*--------------------------------------------------------------
 ## Core
 --------------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

/*--------------------------------------------------------------
 ## Components
 --------------------------------------------------------------*/
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SortByPipe } from './sort-by.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SortByPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    // CommonModule,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SortByPipe
  ],
})
export class SharedModule { }
