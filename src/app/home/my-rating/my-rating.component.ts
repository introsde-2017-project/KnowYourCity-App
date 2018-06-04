import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-my-rating',
  templateUrl: './my-rating.component.html',
  styleUrls: ['./my-rating.component.css']
})
export class MyRatingComponent implements OnInit {
  myRecomF: any;
  myRecomM: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.myRecomF=this.userService.getMyFoodRatings();
    this.myRecomM=this.userService.getMyMovieRatings();
  }

}
