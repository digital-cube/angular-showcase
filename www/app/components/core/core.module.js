import angular from 'angular';

import 'angular-ui-router';
import 'angular-bootstrap';
import 'angular-messages';

let m = angular.module('dcCore', [
    'ui.router',
    'ui.bootstrap',
    'ngMessages'
]);

export default m;
