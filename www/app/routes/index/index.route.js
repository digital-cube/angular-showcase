import angular from 'angular';
import 'angular-ui-router';
import template from './index.template.html!text';

export let indexRouteModule = angular.module('indexRouteModule', [
    'ui.router'
]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('index', {
        url: '/',
        template: template,
        controllerAs: 'vm'
    });
}
]);
