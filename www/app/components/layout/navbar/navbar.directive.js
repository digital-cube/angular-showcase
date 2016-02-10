import template from './navbar.html!text';
import Controller from './navbar.controller';

export default
angular.module('app.navbar', []).directive('navbar', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: template,
        controller: Controller,
        controllerAs: 'vm',
        scope: {}
    };
});
