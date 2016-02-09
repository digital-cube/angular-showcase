/**
 * Created by Savo on 09-Feb-16.
 */

const DI = ['originalUser', '$uibModalInstance', 'UsersService'];
export default class UserDetailsController {
    constructor(originalUser, $uibModalInstance, UsersService) {
        this.UsersService = UsersService;
        this.originalUser = originalUser;
        this.$uibModalInstance = $uibModalInstance;

        if (this.originalUser === undefined) {
            this.isCreateModal = true;
            this.user = {};
        } else {
            this.isCreateModal = false;
            this.user = angular.copy(this.originalUser);
        }
    }

    okButtonHandler(form) {
        if (this.isCreateModal) {
            this._createHandler(form);
        } else {
            this._editHandler(form);
        }
    }

    cancelButtonHandler() {
        this.$uibModalInstance.dismiss('cancel');
    }

    _createHandler(form) {
        this.UsersService.addNewUser(this.user);
        this.$uibModalInstance.dismiss('cancel');
    }

    _editHandler(form) {
        angular.merge(this.originalUser, this.user);
        this.$uibModalInstance.dismiss('cancel');
    }
}

UserDetailsController.$inject = DI;