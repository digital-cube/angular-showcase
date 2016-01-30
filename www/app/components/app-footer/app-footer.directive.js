import angular from 'angular';
import template from './app-footer.template.html!text';
import Controller from './app-footer.controller';

Controller.$inject = [];

export default
angular.
module('appFooterMenuModule', []).
directive('appFooter', function() {
    return {
        restrict: 'E',
        template: template,
        controller: Controller,
        controllerAs: 'ctlFooter',
        bindToController: true
    };
});

