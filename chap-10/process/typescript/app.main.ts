import {Component, provide} from 'angular2/core';
import {Artist} from './artist';
import {HomeComponent} from './app.home';
import {AppComponent} from './app.component';
import {DemoComponent} from './app.demo';
import {ArtistItemComponent} from './artist-item.component';
import {ArtistDetailsComponent} from './artist-details.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, APP_BASE_HREF,
  LocationStrategy, HashLocationStrategy} from 'angular2/router';

@Component({
    selector: 'root-app',
    templateUrl: 'partials/navbar.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/Home', component: HomeComponent, as: 'Home' },
    { path: '/Demo', component: DemoComponent, as: 'Demo' },
  { path: '/App', component: AppComponent, as: 'App' },

])
export class RootComponent {

}

