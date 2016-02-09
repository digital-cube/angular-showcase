/**
 * Created by Savo on 08-Feb-16.
 */

export default function (module) {
    module.service('UsersService', function () {
        let usersListMock = {
            1: {id: 1, firstName: 'Savo', lastName: 'Garovic', email: 'savo.garovic@gmail.com', age: 29},
            2: {id: 2, firstName: 'Igor', lastName: 'Jeremic', email: 'igor@digitalcube.com', age: 39}
        };

        this.getAllUsers = function () {
            return usersListMock;
        };

        this.sayHello = function () {
            console.log('Hello, I am User service');
        };

        this.addNewUser = function (user) {
            let randomId = Math.floor(Math.random() * 90000) + 10000;
            user.id = randomId;
            usersListMock[randomId] = user;
        }
    });
}