/**
 * Created by Savo on 10-Feb-16.
 */

const DI = ['user'];
export default class UserDetailsController {
    constructor(user) {
        this.user = user;
    }
}

UserDetailsController.$inject = DI;