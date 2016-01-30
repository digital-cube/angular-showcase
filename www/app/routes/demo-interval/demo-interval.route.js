import angular from 'angular';
import 'angular-ui-router';
import template from './demo-interval.template.html!text';

import Controller from './demo-interval.controller';

Controller.$inject = ['$interval'];

export let demoIntervalRouteModule = angular.module('demoIntervalRouteModule', [
  'ui.router',
]).config(['$stateProvider', function ($stateProvider){
    $stateProvider.state('demo-interval', {
        url: '/demo-interval',
        template: template,
        controller: Controller,
        controllerAs: 'demoIntervalCtl',
        bindToController: true
    });
  }
]);
