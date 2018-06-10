import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpResponse } from '@angular/common/http';
//import 'rxjs/operators/map';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { Credentail } from './credentail.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'https://foodprocess.herokuapp.com';
  readonly movieUrl= 'https://movieprocess.herokuapp.com';
  constructor(private http: HttpClient) { }

  registerUser(user : User, foodTypes: string[], movieGen: string[]){
    const body: User = {
      userName: user.userName,
      password: user.password,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      foodTypes: foodTypes,
      movieGens: movieGen
    }
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.rootUrl + '/user/signup',body, {headers: headers});
  }

  logout(){
    const header2 = new HttpHeaders()
              .set('Content-Type', 'application/json; charset=utf-8')
              .set('Accept','application/json; charset=utf-8')
              .set('Authorization','Bearer '.concat(localStorage.getItem('token')));
    return this.http.get(this.rootUrl + '/user/logout', {headers: header2});

  }

  signinUser(credentail : Credentail){
    const body: Credentail = {
      username: credentail.username,
      password: credentail.password
    }
    const headers = new HttpHeaders()
              .set('Content-Type', 'application/json; charset=utf-8')
              .set('Accept','application/json; charset=utf-8');
    return this.http.post(this.rootUrl + '/user/login',body, {headers: headers});
                    
  }

  checkAuth(){
    const header = new HttpHeaders()
              .set('Content-Type', 'application/json; charset=utf-8')
              .set('Accept','application/json; charset=utf-8')
              .set('Authorization','Bearer '.concat(localStorage.getItem('token')));
    return this.http.get(this.rootUrl + '/user/auth', {headers: header});
  }

  getFoodTypes(){
    const header2 = new HttpHeaders()
              .set('Content-Type', 'application/json; charset=utf-8')
              .set('Accept','application/json; charset=utf-8');
    return this.http.get(this.rootUrl + '/types/f', {headers: header2});
  }

  getMovieGens(){
    const header2 = new HttpHeaders()
              .set('Content-Type', 'application/json; charset=utf-8')
              .set('Accept','application/json; charset=utf-8');
    return this.http.get(this.movieUrl + '/types/m', {headers: header2});
  }

  getFoodRec(){
    const header = new HttpHeaders()
              .set('Content-Type', 'application/json; charset=utf-8')
              .set('Accept','application/json; charset=utf-8')
              .set('Authorization','Bearer '.concat(localStorage.getItem('token')));
    return this.http.get(this.rootUrl + '/secure/recom/f/5', {headers: header});
  }

  getMovieRec(){
    const header = new HttpHeaders()
              .set('Content-Type', 'application/json; charset=utf-8')
              .set('Accept','application/json; charset=utf-8')
              .set('Authorization','Bearer '.concat(localStorage.getItem('token')));
    return this.http.get(this.movieUrl + '/secure/recom/m/5', {headers: header});
  }

  addUserFoodRating(itemId: string, rating: number){
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/json; charset=utf-8')
            .set('Accept','application/json; charset=utf-8')
            .set('Authorization','Bearer '.concat(localStorage.getItem('token')));
    return this.http.get(this.rootUrl + '/secure/add/rating/f/' + itemId + '/' + rating, {headers: headers});
  }

  addUserMovieRating(itemId: string, rating: number){
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/json; charset=utf-8')
            .set('Accept','application/json; charset=utf-8')
            .set('Authorization','Bearer '.concat(localStorage.getItem('token')));
    return this.http.get(this.movieUrl + '/secure/add/rating/m/' + itemId + '/' + rating, {headers: headers});
  }

  getMyFoodRatings(){
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/json; charset=utf-8')
            .set('Accept','application/json; charset=utf-8')
            .set('Authorization','Bearer '.concat(localStorage.getItem('token')));
    return this.http.get(this.rootUrl + '/secure/get/myratings/f', {headers: headers});
  }

  getMyMovieRatings(){
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/json; charset=utf-8')
            .set('Accept','application/json; charset=utf-8')
            .set('Authorization','Bearer '.concat(localStorage.getItem('token')));
    return this.http.get(this.movieUrl + '/secure/get/myratings/m', {headers: headers});
  }

  getSearchedFoods(type : any){
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/json; charset=utf-8')
            .set('Accept','application/json; charset=utf-8')
            .set('Authorization','Bearer '.concat(localStorage.getItem('token')));
    return this.http.get(this.rootUrl + '/secure/getbytype/f/'+type, {headers: headers});
  }

  getSearchedMovies(type : any){
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/json; charset=utf-8')
            .set('Accept','application/json; charset=utf-8')
            .set('Authorization','Bearer '.concat(localStorage.getItem('token')));
    return this.http.get(this.movieUrl + '/secure/getbytype/m/'+type, {headers: headers});
  }

  getQuotes(){
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/json; charset=utf-8')
            .set('Accept','application/json; charset=utf-8')
            .set('Authorization','Bearer '.concat(localStorage.getItem('token')));
    return this.http.get(this.rootUrl + '/quotes/get', {headers: headers});
  }

  getMyDetail(){
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/json; charset=utf-8')
            .set('Accept','application/json; charset=utf-8')
            .set('Authorization','Bearer '.concat(localStorage.getItem('token')));
    return this.http.get(this.rootUrl + '/user/detail', {headers: headers});
  }

  getAllFood(){
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/json; charset=utf-8')
            .set('Accept','application/json; charset=utf-8')
            .set('Authorization','Bearer '.concat(localStorage.getItem('token')));
    return this.http.get(this.rootUrl + '/secure/getall/f', {headers: headers});
  }

  getAllMovie(){
    const headers = new HttpHeaders()
            .set('Content-Type', 'application/json; charset=utf-8')
            .set('Accept','application/json; charset=utf-8')
            .set('Authorization','Bearer '.concat(localStorage.getItem('token')));
    return this.http.get(this.movieUrl + '/secure/getall/m', {headers: headers});
  }

}
