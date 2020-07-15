import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SearchPageComponent } from 'src/components/search-page/searchpage.component';
// import { FavouritePageComponent } from 'src/components/favourite-page/favouritepage.component';
// Routes array
const routes: Routes = [
  // The router selects the route with a first match wins strategy. 
  // Wildcard routes are the least specific routes in the route configuration. 
  // Be sure it is the last route in the configuration.
  // { path: 'searchpage', component: SearchPageComponent },
  // { path: 'favorite', component: FavouritePageComponent }
 ];

@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
 exports: [ RouterModule ]
})

export class AppRoutingModule {}

export const routingComponents = []