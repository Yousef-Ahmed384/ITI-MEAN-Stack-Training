import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Register } from './register/register';
import { Login } from './login/login';
import { Cart } from './cart/cart';
import { NotFoundPage } from './not-found-page/not-found-page';
import { Home } from './home/home';
import { ProductDetails } from './product-details/product-details';

export const routes: Routes = [
    {path:'allProducts', component:Home},
    {path:'register', component:Register},
    {path:'login', component:Login},
    {path:'cart', component:Cart},
    {path:'details/:id', component:ProductDetails},
    {path:'**', component:NotFoundPage}

];
