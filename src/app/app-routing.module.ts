import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - My robot shop" },
  { path: 'catalog', component: CatalogComponent, title: "Catalog - My robot shop" },
  { path: 'cart', component: CartComponent, title: "Cart - My robot shop" },
  { path: 'sign-in', component:SignInComponent },
  { path: 'form-controls', component:TemplateFormControlsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
