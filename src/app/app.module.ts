
/*--------------------------------------------------------------
 ## Core
 --------------------------------------------------------------*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/*--------------------------------------------------------------
 ## Custom
 --------------------------------------------------------------*/
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { PostsModule } from './posts/posts.module';
import { AppRoutingModule } from './app-routing.module';

/*--------------------------------------------------------------
 ## Providers
 --------------------------------------------------------------*/
import { WordpressSettingsService } from './wordpress-settings.service';

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
    HttpModule,
    SharedModule,
    HomeModule,
    PostsModule,
    AppRoutingModule
  ],
  providers: [WordpressSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
