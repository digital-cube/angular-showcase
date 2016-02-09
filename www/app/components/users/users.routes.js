/**
 * Created by Savo on 08-Feb-16.
 */

import template from './users.html!text';
import UsersController from './users.controller';

export default function (module) {
    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('app.users', {
            url: '/users',
            views: {
                'mainContent': {
                    template: template,
                    controller: UsersController,
                    controllerAs: 'vm'
                },
                'header@app': {
                    template: 'User list'
                }
            },
            resolve: {
                users: function (UsersService) {
                    let usersList = UsersService.getAllUsers();

                    return usersList;
                }
            }
        });
    }
    ]);
}