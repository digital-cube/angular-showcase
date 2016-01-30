import angular from 'angular';

export default
angular.
module('contentModule', []).
directive('app-content', function() {
    return {
        restrict: 'E',
    };
});
