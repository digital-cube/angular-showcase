import angular from 'angular';
import template from './app-header.template.html!text';
import Controller from './app-header.controller';

Controller.$inject = [];

export default
angular.
module('appHeaderMenuModule', []).
directive('appHeader', function() {
    return {
        restrict: 'E',
        template: template,
        controller: Controller,
        controllerAs: 'ctlHeader',
        bindToController: true
    };
});
