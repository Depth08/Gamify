import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent}  from './app.component';
import {HomeComponent} from './pages/pages.home';
import {PageNotFoundComponent} from './pages/pages.notfound';
import {HeroComponent} from "./components/hero.component";
import {FeaturesComponent} from "./components/features.component";
import {DoormatComponent} from './components/doormat.component';
import {LoginComponent} from './pages/pages.login';
import {EditorComponent} from './pages/pages.editor';
import {FormsModule}   from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ToolDrawerComponent} from "./components/editor/components.editor.tooldrawer";
import {EditorPaneComponent} from "./components/editor/components.editor.editorpane";
import {NodeComponent} from "./components/editor/components.editor.node";
import {BeaconComponent} from "./components/editor/components.editor.beacon";

const appRoutes:Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'games/create',
        component: EditorComponent
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
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HeroComponent,
        FeaturesComponent,
        PageNotFoundComponent,
        DoormatComponent,
        LoginComponent,
        EditorComponent,
        ToolDrawerComponent,
        EditorPaneComponent,
        NodeComponent,
        BeaconComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
