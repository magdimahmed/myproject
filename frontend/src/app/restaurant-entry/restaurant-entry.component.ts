import { Component, OnInit } from '@angular/core';
import {RestaurantService} from './restaurant.service';
import {Restaurant} from './restaurant';
import {OnClickEvent, OnRatingChangeEven, OnHoverRatingChangeEvent} from 'angular-star-rating/star-rating-struct';

@Component({
  selector: 'app-restaurant-entry',
  templateUrl: './restaurant-entry.component.html',
  styleUrls: ['./restaurant-entry.component.css'],
  providers: [RestaurantService]
})
export class RestaurantEntryComponent implements OnInit {

  restaurants: Restaurant[];
  onClickResult: OnClickEvent;
  onHoverRatingChangeResult: OnHoverRatingChangeEvent;
  onRatingChangeResult: OnRatingChangeEven;

  constructor(private restaurantService: RestaurantService ) { }

  ngOnInit() {
    this.restaurants = this.restaurantService.getRestaurants();
  }



  onClick = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResult = $event;
  };

  onRatingChange = ($event: OnRatingChangeEven) => {
    console.log('onRatingUpdated $event: ', $event);
    this.onRatingChangeResult = $event;
  };

  onHoverRatingChange = ($event: OnHoverRatingChangeEvent) => {
    console.log('onHoverRatingChange $event: ', $event);
    this.onHoverRatingChangeResult = $event;
  };

}
