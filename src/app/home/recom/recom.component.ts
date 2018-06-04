import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { NgForm, Form } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recom',
  templateUrl: './recom.component.html',
  styleUrls: ['./recom.component.css']
})
export class RecomComponent implements OnInit {
  recomFood: any;
  recomMovie: any;
  valueF: number[]=[];
  valueM: number[]=[];
  showSpinnerF: boolean=true;
  showSpinnerM: boolean=true;

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.getRecm();
  }

  onSubmitF(itemid: string,i: number){
    this.userService.addUserFoodRating(itemid,this.valueF[i])
    .subscribe(res => {
      this.toastr.success('Rating Added successfully');
    },
      err => {
        this.toastr.error('Unsuccessful');
      });
  }

  onSubmitM(itemid: string,i: number){
    this.userService.addUserMovieRating(itemid,this.valueM[i])
    .subscribe(res => {
      this.toastr.success('Rating Added successfully');
    },
      err => {
        this.toastr.error('Unsuccessful');
      });
  }

  getRecm(){
    this.userService.getFoodRec().subscribe(
      (data : any)=>{
        console.log(data);
        this.recomFood=data;
        this.showSpinnerF=false;
        this.toastr.success('Ratings');
      },
        err => {
          this.toastr.error('Unsuccessful');
          this.router.navigate(['/login']);
        });

    this.userService.getMovieRec().subscribe(
      (data : any)=>{
        this.recomMovie=data;
        this.showSpinnerM=false;
        this.toastr.success('Ratings');
      },
        err => {
          this.toastr.error('Unsuccessful');
          this.router.navigate(['/login']);
        });
  }


}
