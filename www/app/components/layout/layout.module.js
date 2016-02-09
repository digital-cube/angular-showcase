/**
 * Created by Savo on 09-Feb-16.
 */

import angular from 'angular';
import routes from './layout.routes';

import dcCore from '../core/core.module';

let m = angular.module('dcLayout', [
    dcCore.name
]);

routes(m);

export default m;
