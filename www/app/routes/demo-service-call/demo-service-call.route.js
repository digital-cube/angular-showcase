import angular from 'angular';
import 'angular-ui-router';
import template from './demo-service-call.template.html!text';

import Controller from './demo-service-call.controller';

export let demoServiceCallModule = angular.module('demoServiceCallModule', [
  'ui.router',
]).config(['$stateProvider', function ($stateProvider){
    $stateProvider.state('demo-service-call', {
        url: '/demo-service-call',
        template: template,
        controller: Controller,
        controllerAs: 'demoServiceCallCtl',
        bindToController: true
    });
  }
]);
