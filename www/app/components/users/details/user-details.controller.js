/**
 * Created by Savo on 09-Feb-16.
 */

const DI = ['user', '$uibModalInstance'];
export default class UserDetailsController {
    constructor(user, $uibModalInstance) {
        this.user = user;
        this.$uibModalInstance = $uibModalInstance;
    }

    closeDialog() {
        this.$uibModalInstance.dismiss('cancel');
    }
}

UserDetailsController.$inject = DI;