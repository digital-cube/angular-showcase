import angular from 'angular';

export default
angular.
module('clearModule', []).
directive('clear', function() {
    return {
        restrict: 'E',
        template: '<div class="clear"></div>'
    };
});
