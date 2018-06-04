import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Credentail } from '../../shared/credentail.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  login: Credentail;
  isLoginError: boolean = false;
  showSpinner: boolean=false;

  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.login = {
      username: '',
      password: ''
    }
  }

  OnSubmit(form: NgForm) {
    this.showSpinner=true;
    this.userService.signinUser(form.value)
    .subscribe((data : any) => {
      this.showSpinner=false;
      localStorage.setItem('token',data.token);
      this.toastr.success('User login successful');
      this.router.navigate(['/search'])
    },
      (err: HttpErrorResponse) => {
        this.isLoginError= true;
        this.toastr.error();
      });
  }

}
