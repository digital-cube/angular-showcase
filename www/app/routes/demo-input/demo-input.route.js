import angular from 'angular';
import 'angular-ui-router';
import template from './demo-input.template.html!text';

import Controller from './demo-input.controller';

export let demoInputRouteModule = angular.module('demoInputRouteModule', [
  'ui.router'
]).config(['$stateProvider', function ($stateProvider){
    $stateProvider.state('demo-input', {
        url: '/demo-input',
        template: template,
        controller: Controller,
        controllerAs: 'vm'
    });
  }
]);
