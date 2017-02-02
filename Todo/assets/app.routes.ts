import { RouterModule, Routes, provideRoutes, Route } from '@angular/router';
import { AppComponent } from './app.component'; 
import { AboutComponent } from './component/about.component';
import { HomeComponent } from './component/home.component';
export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about', 
        component: AboutComponent
    },
    {
        path: 'nav3',
        redirectTo: 'home'
    }

];

export const APP_ROUTES_PROVIDE = [
    provideRoutes(APP_ROUTES)
]
