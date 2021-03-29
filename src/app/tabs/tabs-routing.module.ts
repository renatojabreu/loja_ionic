import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {path:'home',loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)},
      {path:'categories',loadChildren: () => import('../categories/categories.module').then( m => m.CategoriesPageModule)},
      {path:'cart',loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)},
      {path:'my-account',loadChildren: () => import('../my-account/my-account.module').then( m => m.MyAccountPageModule)}
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
