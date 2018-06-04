import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-my-detail',
  templateUrl: './my-detail.component.html',
  styleUrls: ['./my-detail.component.css']
})
export class MyDetailComponent implements OnInit {
  user: any;
  showSpinner: boolean=true;

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getMyDetail();
  }

  getMyDetail(){
    this.user=this.userService.getMyDetail().subscribe(
      (data : any)=>{
        this.user=data;
        this.toastr.success('Detail');
        this.showSpinner=false;
      },
        err => {
          this.toastr.error('Unsuccessful');
        });
  }

}
