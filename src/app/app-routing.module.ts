import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - My robot shop" },
  { path: 'catalog', component: CatalogComponent, title: "Catalog - My robot shop" },
  { path: 'cart', component: CartComponent, title: "Cart - My robot shop" },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sign-in', component:SignInComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
