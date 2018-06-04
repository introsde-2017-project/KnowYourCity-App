import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';
import { Ftype } from 'src/app/shared/ftype.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  foodTypes: Ftype[]=[];
  movieGens: Ftype[]=[];
  selectedFoodTypes: string[]=[];
  selectedMovieTypes: string[]=[];
  showSpinner: boolean=false;

  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { 
    

  }
  

  ngOnInit() {
    this.resetForm();
    this.initFoodTypes();
    this.initMovieGen();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.user = {
      userName: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      foodTypes: [],
      movieGens: []
    }
  }

  OnSubmit(form: NgForm) {
    this.showSpinner=true;
    this.getSelectedFoodTypes();
    this.getSelectedMovieGen();
    this.userService.registerUser(form.value,this.selectedFoodTypes,this.selectedMovieTypes)
      .subscribe(res => {
        this.showSpinner=false;
        this.resetForm(form);
        this.toastr.success('User registration successful');
        this.router.navigate(['/login']);
      },
        err => {
          this.toastr.error('registration Unsuccessful');
        });
  }

  initFoodTypes(){
    this.userService.getFoodTypes().subscribe(
      (data : any)=>{
        for(var i=0; i<data.length; i++){
          this.foodTypes.push(new Ftype(data[i],i));
        }
      });
  }

  initMovieGen(){
    this.userService.getMovieGens().subscribe(
      (data : any)=>{
        for(var i=0; i<data.length; i++){
          this.movieGens.push(new Ftype(data[i],i));
        }
      });
  }

  getSelectedFoodTypes() {
    for(var i=0; i<this.foodTypes.filter(opt => opt.selected).length; i++){
      this.selectedFoodTypes.push(this.foodTypes.filter(opt => opt.selected)[i].name);
    }
  }
  getSelectedMovieGen() {
    for(var i=0; i<this.movieGens.filter(opt => opt.selected).length; i++){
      this.selectedMovieTypes.push(this.movieGens.filter(opt => opt.selected)[i].name);
    }
  }


}
