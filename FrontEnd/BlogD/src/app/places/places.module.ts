import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { OngozluKopruScreenComponent } from './ongozlu-kopru-screen/ongozlu-kopru-screen.component';
import { GaziKoskuScreenComponent } from './gazi-kosku-screen/gazi-kosku-screen.component';
import { BenuSenBurcuScreenComponent } from './benu-sen-burcu-screen/benu-sen-burcu-screen.component';
import { MeryemAnaKilisesiScreenComponent } from './meryem-ana-kilisesi-screen/meryem-ana-kilisesi-screen.component';
import { DortAyakliMinareScreenComponent } from './dort-ayakli-minare-screen/dort-ayakli-minare-screen.component';
import { PlacesMainScreenComponent } from './places-main-screen/places-main-screen.component';
import { HevselBahcesiScreenComponent } from './hevsel-bahcesi-screen/hevsel-bahcesi-screen.component';
import { SurScreenComponent } from './sur-screen/sur-screen.component';


@NgModule({
  declarations: [
    OngozluKopruScreenComponent,
    GaziKoskuScreenComponent,
    BenuSenBurcuScreenComponent,
    MeryemAnaKilisesiScreenComponent,
    DortAyakliMinareScreenComponent,
    PlacesMainScreenComponent,
    HevselBahcesiScreenComponent,
    SurScreenComponent
  ],
  imports: [
    CommonModule,
    PlacesRoutingModule
  ]
})
export class PlacesModule { }
