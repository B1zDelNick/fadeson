
/*--------------------------------------------------------------
 ## Core
 --------------------------------------------------------------*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*--------------------------------------------------------------
 ## Custom
 --------------------------------------------------------------*/
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {PostsModule} from './posts/posts.module';
import {AppRoutingModule} from './app-routing.module';

/*--------------------------------------------------------------
 ## Components
 --------------------------------------------------------------*/
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    PostsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
