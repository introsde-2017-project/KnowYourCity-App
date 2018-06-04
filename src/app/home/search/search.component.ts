import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  foodTypes: any;
  movieGens: any;
  resultM: any;
  resultF: any;
  showSpinnerF: boolean=false;
  showSpinnerM: boolean=false;

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.foodTypes=this.userService.getFoodTypes();
    this.movieGens=this.userService.getMovieGens();
  }

  onSubmitF(value: any){
    this.showSpinnerF=true;
    this.userService.getSearchedFoods(value).subscribe(
      (data : any)=>{
        this.resultF=data;
        this.toastr.success('Results');
        this.showSpinnerF=false;
      },
        err => {
          this.toastr.error('Unsuccessful');
        });
  }

  onSubmitM(value: any){
    this.showSpinnerM=true;
    this.userService.getSearchedMovies(value).subscribe(
      (data : any)=>{
        this.resultM=data;
        this.toastr.success('Results');
        this.showSpinnerM=false;
      },
        err => {
          this.toastr.error('Unsuccessful');
        });
  }
  

}
