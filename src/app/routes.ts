import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { RecomComponent } from './home/recom/recom.component';
import { MyRatingComponent } from './home/my-rating/my-rating.component';
import { SearchComponent } from './home/search/search.component';
import { AuthGuard } from './auth/auth.guard';
 
export const appRoutes: Routes = [
    { 
        path: 'search', component: HomeComponent, canActivate:[AuthGuard], 
        children: [{ path: '', component: SearchComponent }]
    },
    { 
        path: 'recom', component: HomeComponent, canActivate:[AuthGuard], 
        children: [{ path: '', component: RecomComponent }]
    },
    { 
        path: 'myrating', component: HomeComponent, canActivate:[AuthGuard], 
        children: [{ path: '', component: MyRatingComponent }]
    },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'}
    
];