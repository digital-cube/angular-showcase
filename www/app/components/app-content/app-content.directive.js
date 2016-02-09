import angular from 'angular';
import template from './app-content.html!text';

export default
angular.
module('contentModule', []).
directive('appContent', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: template,
        scope: {}
    };
});
