import { Injectable } from '@angular/core';

import { Restaurant } from './restaurant';
import { Restaurants } from './mock-restaruants';


@Injectable()
export class RestaurantService {
  getRestaurants(): Restaurant[] {
    return Restaurants;
  }
}
