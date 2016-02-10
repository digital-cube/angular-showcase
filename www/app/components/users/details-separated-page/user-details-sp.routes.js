/**
 * Created by Savo on 10-Feb-16.
 */

import template from './user-details-sp.html!text';
import DetailsController from './user-details-sp.controller';

export default function (module) {
    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('app.userDetails', {
            url: '/users/{userId}',
            views: {
                'mainContent': {
                    template: template,
                    controller: DetailsController,
                    controllerAs: 'vm'
                },
                'header@app': {
                    template: 'User details'
                }
            },
            resolve: {
                user: function (UsersService, $stateParams) {
                    let user = UsersService.get($stateParams.userId);

                    return user;
                }
            }
        });
    }
    ]);
}