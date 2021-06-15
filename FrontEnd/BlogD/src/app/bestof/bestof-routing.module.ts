import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BestofMainScreenComponent} from './bestof-main-screen/bestof-main-screen.component';

import {BestCafesScreenComponent} from './best-cafes-screen/best-cafes-screen.component';
import {BestDessertScreenComponent} from './best-dessert-screen/best-dessert-screen.component';
import {BestFoodScreenComponent} from './best-food-screen/best-food-screen.component';
import {BestHotelScreenComponent} from './best-hotel-screen/best-hotel-screen.component';
import {BestMuseumScreenComponent} from './best-museum-screen/best-museum-screen.component';

const routes: Routes = [
  {
    path: '',
    component: BestofMainScreenComponent
  },{
  path: 'cafes',
  component: BestCafesScreenComponent
  },{
  path: 'dessert_stores',
  component: BestDessertScreenComponent
  },{
  path: 'food',
  component: BestFoodScreenComponent
  },{
  path: 'hotels',
  component: BestHotelScreenComponent
  },{
  path: 'museums',
  component: BestMuseumScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestofRoutingModule { }
