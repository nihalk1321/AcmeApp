import { Routes } from "@angular/router";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { WelcomeComponent } from "./welcome/welcome.component";

export const RouteArrays:Routes = [
    {
        path:'welcome',
        component: WelcomeComponent
    },
    {
        path:'product-list',
        component: ProductListComponent
    },
    {
        path:'product/:productId',
        component:ProductDetailComponent
    },
    {
        path:'',
        redirectTo : 'welcome',
        pathMatch:'full'
    },
    {
        path:'**',
        component:NotfoundComponent
    }
]