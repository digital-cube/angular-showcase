import angular from 'angular';

import {mainConfigModule} from './config/main.config';
import {indexRouteModule} from './routes/index/index.route';
import {demoInputRouteModule} from './routes/demo-input/demo-input.route';
import {demoIntervalRouteModule} from './routes/demo-interval/demo-interval.route';
import {demoServiceCallModule} from './routes/demo-service-call/demo-service-call.route';

import appHeaderMenuModule from './components/app-header/app-header.directive';
import appFooterMenuModule from './components/app-footer/app-footer.directive';
import mainMenuModule from './components/main-menu/main-menu.directive';
import appContentModule from './components/app-content/app-content.directive';

import dcUsers from './components/users/users.module';

import 'bootstrap/css/bootstrap.css!';
import '/assets/css/styles.css!';

export let mainModule = angular.module('main', [

    mainConfigModule.name,
    indexRouteModule.name,
    demoInputRouteModule.name,
    demoIntervalRouteModule.name,
    demoServiceCallModule.name,

    appHeaderMenuModule.name,
    appContentModule.name,
    appFooterMenuModule.name,
    mainMenuModule.name,

    dcUsers.name

]);

