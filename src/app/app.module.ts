import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';

import { RepositoryService } from './repository.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { DatePipe } from './date.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    DatePipe,
    HomepageComponent,
    NavbarComponent,

  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [UserService, RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
