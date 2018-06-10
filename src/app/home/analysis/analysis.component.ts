import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  allFood: any;
  allMovie: any;
  showSpinnerF: boolean=true;
  showSpinnerM: boolean=true;

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems(){
    this.userService.getAllFood().subscribe(
      (data : any)=>{
        console.log(data);
        this.allFood=data;
        this.showSpinnerF=false;
        this.toastr.success('Food Analysis');
      },
        err => {
          this.toastr.error('Unsuccessful');
          this.router.navigate(['/login']);
        });

    this.userService.getAllMovie().subscribe(
      (data : any)=>{
        this.allMovie=data;
        this.showSpinnerM=false;
        this.toastr.success('Movie Analysis');
      },
        err => {
          this.toastr.error('Unsuccessful');
          this.router.navigate(['/login']);
        });
  }

}
