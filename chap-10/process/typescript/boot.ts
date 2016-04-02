import {bootstrap} from 'angular2/platform/browser';
import {RootComponent} from './app.main';
import {Component, provide} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, APP_BASE_HREF,
	LocationStrategy, HashLocationStrategy} from 'angular2/router';
	
bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);
