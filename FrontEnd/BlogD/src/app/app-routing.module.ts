import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeScreenComponent } from './home/home-screen/home-screen.component'

const routes: Routes = [
	{
		path: '',
		data: {
			title: "BlogD"
		},
		children: [
		{
			path: '',
			component: HomeScreenComponent
		}, {
			path: "bestof",
			loadChildren: () => import('./bestof/bestof.module').then(m => m.BestofModule),
			data: {
				title: "Best Of Diyarbakır"
			}
		}, {
			path: "places",
			loadChildren: () => import('./places/places.module').then(m => m.PlacesModule),
			data: {
				title: "Places"
			}
		}
		]
	},	
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
