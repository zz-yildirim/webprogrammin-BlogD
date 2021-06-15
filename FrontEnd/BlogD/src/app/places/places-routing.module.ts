import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PlacesMainScreenComponent} from './places-main-screen/places-main-screen.component';

import {BenuSenBurcuScreenComponent} from './benu-sen-burcu-screen/benu-sen-burcu-screen.component';
import {GaziKoskuScreenComponent} from './gazi-kosku-screen/gazi-kosku-screen.component';
import {HevselBahcesiScreenComponent} from './hevsel-bahcesi-screen/hevsel-bahcesi-screen.component';
import {MeryemAnaKilisesiScreenComponent} from './meryem-ana-kilisesi-screen/meryem-ana-kilisesi-screen.component';
import {OngozluKopruScreenComponent} from './ongozlu-kopru-screen/ongozlu-kopru-screen.component';
import {DortAyakliMinareScreenComponent} from './dort-ayakli-minare-screen/dort-ayakli-minare-screen.component';
import {SurScreenComponent} from './sur-screen/sur-screen.component';

const routes: Routes = [
  {
    path: "",
    component: PlacesMainScreenComponent
  }, {
    path: "benu_sen_burcu",
    component: BenuSenBurcuScreenComponent
  }, {
    path: "gazi_kosku",
    component: GaziKoskuScreenComponent
  }, {
    path: "hevsel_bahcesi",
    component: HevselBahcesiScreenComponent
  }, {
    path: "meryem_ana_kilisesi",
    component: MeryemAnaKilisesiScreenComponent
  }, {
    path: "ongozlu_kopru",
    component: OngozluKopruScreenComponent
  }, {
    path: "dort_ayakli_minare",
    component: DortAyakliMinareScreenComponent
  }, {
    path: "surlar",
    component: SurScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }
