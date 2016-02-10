/**
 * Created by Savo on 09-Feb-16.
 */

import angular from 'angular';
import routes from './layout.routes';

import dcCore from '../core/core.module';
import dcNavbar from './navbar/navbar.directive';
import dcFooter from './footer/footer.directive';

let m = angular.module('dcLayout', [
    dcCore.name,
    dcNavbar.name
]);

routes(m);

m.directive('dcFooter', dcFooter);

export default m;
