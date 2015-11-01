import {Component, ViewEncapsulation} from 'angular2/angular2';

import {
    RouteConfig,
    ROUTER_DIRECTIVES
} from 'angular2/router';

import {Home} from '../components/home/home';
import {About} from '../components/about/about';

@Component({
    selector: 'app',
    templateUrl: './frontend/app/app.html',
    styleUrls: ['./frontend/app/app.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/home', component: Home, as: 'Home'},
    {path: '/about', component: About, as: 'About'},
    {path: '/', redirectTo: '/home'}
])

export class App {

}
