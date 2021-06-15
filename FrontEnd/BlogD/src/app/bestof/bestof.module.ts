import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestofRoutingModule } from './bestof-routing.module';
import { BestofMainScreenComponent } from './bestof-main-screen/bestof-main-screen.component';
import { BestFoodScreenComponent } from './best-food-screen/best-food-screen.component';
import { BestHotelScreenComponent } from './best-hotel-screen/best-hotel-screen.component';
import { BestDessertScreenComponent } from './best-dessert-screen/best-dessert-screen.component';
import { BestCafesScreenComponent } from './best-cafes-screen/best-cafes-screen.component';
import { BestMuseumScreenComponent } from './best-museum-screen/best-museum-screen.component';


@NgModule({
  declarations: [
    BestofMainScreenComponent,
    BestFoodScreenComponent,
    BestHotelScreenComponent,
    BestDessertScreenComponent,
    BestCafesScreenComponent,
    BestMuseumScreenComponent
  ],
  imports: [
    CommonModule,
    BestofRoutingModule
  ]
})
export class BestofModule { }
