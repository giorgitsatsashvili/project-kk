import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './Users/user-card/card/card.component';
import {HttpClientModule} from "@angular/common/http";
import { UserListComponent } from './Users/user-list/user-list.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { SearchComponent } from './header/search/search.component';
import { AddUserComponent } from './Users/add-user/add-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    UserListComponent,
    MainHeaderComponent,
    SearchComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
