import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quotes : string;
  author : string;
  showSpinner: boolean=true;
  showDetail: boolean=false;

  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.getQuotes();
  }

  Logout(){
      localStorage.removeItem('token');
      this.toastr.success('User logout successful');
      this.router.navigate(['/login']);
  }
  getQuotes(){
    this.userService.getQuotes().subscribe(
      (data : any)=>{
        this.quotes=data.quote;
        this.author=data.author;
        this.toastr.success('New Quote');
        this.showSpinner=false;
      },
        err => {
          this.toastr.error('Quotes Unsuccessful');
        });
  }

  ShowDetail(){
    if(this.showDetail==true){
    this.showDetail=false;
    }
    else{
      this.showDetail=true;
    }
  }

}
