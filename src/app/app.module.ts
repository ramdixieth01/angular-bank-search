import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { SearchPageComponent } from 'src/components/search-page/searchpage.component';
import { BanklistDetailComponent } from 'src/components/search-page/banklist-detail.component';
import { WelcomeComponent } from 'src/components/welcome-page/welcome.component';
import { BanklistDetailGuard } from 'src/components/search-page/banklist-detail.guard';





@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    BanklistDetailComponent,
    WelcomeComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'searchpage',component: SearchPageComponent},
      {path:'searchpage/:ifsc',component: BanklistDetailComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}],
      {useHash:true})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
