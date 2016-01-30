import angular from 'angular';
import 'angular-ui-router';
import template from './about.template.html!text';

export let aboutRouteModule = angular.module('aboutRouteModule', [
    'ui.router',
]).config(['$stateProvider', function ($stateProvider){
    $stateProvider.state('about', {
        url: '/about',
        template: template,
        controllerAs: 'aboutCtl',
    });
}
]);
