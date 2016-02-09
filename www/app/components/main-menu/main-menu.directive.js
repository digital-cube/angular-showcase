import angular from 'angular';
import template from './main-menu.html!text';
import Controller from './main-menu.controller';

export default
angular.module('mainMenuModule', []).directive('mainMenu', function () {
    return {
        restrict: 'E',
        template: template,
        controller: Controller,
        controllerAs: 'vm',
        scope: {}
    };
});
