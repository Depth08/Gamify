import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent}  from './app.component';
import {HomeComponent} from './pages/pages.home';
import {PageNotFoundComponent} from './pages/pages.notfound';
import {Hero} from "./components/hero";
import {FeaturesComponent} from "./components/features";
import {DoormatComponent} from './components/doormat';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        Hero,
        FeaturesComponent,
        PageNotFoundComponent,
        DoormatComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
