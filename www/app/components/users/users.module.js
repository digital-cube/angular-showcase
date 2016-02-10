/**
 * Created by Savo on 08-Feb-16.
 */

import angular from 'angular';

import routes from './users.routes';
import detailsRoutes from './details-separated-page/user-details-sp.routes';
import UsersService from './users.service';

import dcCore from '../core/core.module';
import dcLayout from '../layout/layout.module';

let m = angular.module('dcUsers', [
    dcCore.name,
    dcLayout.name
]);

UsersService(m);
routes(m);
detailsRoutes(m);

export default m;