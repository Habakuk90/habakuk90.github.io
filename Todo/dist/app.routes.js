"use strict";
var router_1 = require("@angular/router");
var about_component_1 = require("./component/about.component");
var home_component_1 = require("./component/home.component");
exports.APP_ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'nav3',
        redirectTo: 'home'
    }
];
exports.APP_ROUTES_PROVIDE = [
    router_1.provideRoutes(exports.APP_ROUTES)
];
