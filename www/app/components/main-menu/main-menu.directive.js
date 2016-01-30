import angular from 'angular';
import template from './main-menu.template.html!text';
import Controller from './main-menu.controller';

Controller.$inject = [];

export default
angular.
module('mainMenuModule', []).
directive('mainMenu', function() {
    return {
        restrict: 'E',
        template: template,
        controller: Controller,
        controllerAs: 'ctlMainMenu',
        bindToController: true
    };
});
