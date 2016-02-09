import angular from 'angular';
import template from './app-header.template.html!text';
import Controller from './app-header.controller';

Controller.$inject = [];

export default
angular.
module('appHeaderMenuModule', []).
directive('appHeader', function() {

    function link(scope, element, attrs) {
        element.addClass('dc-header');
    }

    return {
        restrict: 'E',
        transclude: true,
        template: template,
        controller: Controller,
        controllerAs: 'vm',
        scope: {},
        link: link
    };
});
