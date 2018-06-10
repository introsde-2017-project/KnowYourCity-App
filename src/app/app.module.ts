import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/user.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from 'src/app/user/sign-up/sign-up.component';
import { RecomComponent } from './home/recom/recom.component';
import { MyRatingComponent } from './home/my-rating/my-rating.component';
import { SearchComponent } from './home/search/search.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MyDetailComponent } from './home/my-detail/my-detail.component';
import { AuthGuard } from './auth/auth.guard';
import { AnalysisComponent } from './home/analysis/analysis.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    HomeComponent,
    RecomComponent,
    MyRatingComponent,
    SearchComponent,
    LoadingSpinnerComponent,
    MyDetailComponent,
    AnalysisComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
