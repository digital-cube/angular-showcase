/**
 * Created by Savo on 08-Feb-16.
 */

import UserDetailsController from './details/user-details.controller';
import userDetailsTemplate from './details/user-details.html!text';

import UserCreateEditController from './create-edit/user-create-edit.controller';
import userCreateEditTemplate from './create-edit/user-create-edit.html!text';

const DI = ['$uibModal', 'users'];
export default class UsersController {
    constructor($uibModal, users) {
        this.users = users;
        this.$uibModal = $uibModal;
    }

    detailUser(user) {
        this.$uibModal.open({
            animation: true,
            template: userDetailsTemplate,
            controller: UserDetailsController,
            controllerAs: 'vm',
            resolve: {
                user: function () {
                    return user;
                }
            }
        });
    }

    createEditUser(user) {
        this.$uibModal.open({
            animation: true,
            template: userCreateEditTemplate,
            controller: UserCreateEditController,
            controllerAs: 'vm',
            resolve: {
                originalUser: function () {
                    return user;
                }
            }
        });
    }

    deleteUser(userId) {
        delete this.users[userId];
    }
}

UsersController.$inject = DI;