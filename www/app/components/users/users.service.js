/**
 * Created by Savo on 08-Feb-16.
 */

export default function (module) {
    module.service('UsersService', function () {
        let usersListMock = {
            1: {id: 1, firstName: 'Savo', lastName: 'Garović', email: 'savo.garovic@gmail.com', age: 29},
            2: {id: 2, firstName: 'Igor', lastName: 'Jeremić', email: 'igor@digitalcube.com', age: 39},
            3: {id: 3, firstName: 'Aleksandar', lastName: 'Đinđić', email: 'djindjic@gmail.com', age: 18},
            4: {id: 4, firstName: 'Dejan', lastName: 'Đorović', email: 'dejan@digitalcube.rs', age: 18},
            5: {id: 5, firstName: 'Ivo', lastName: 'Kovačević', email: 'ivo@digitalcube.rs', age: 18},
            6: {id: 6, firstName: 'Mladen', lastName: 'Milićević', email: 'mladen@digitalcube.rs', age: 18},
            7: {id: 7, firstName: 'Nebojša', lastName: 'Dolaš', email: 'nebojsa@bemapps.com', age: 18},
            8: {id: 8, firstName: 'Nemanja', lastName: 'Adamov', email: 'nemanja.d.adamov@gmail.com', age: 18},
            9: {id: 9, firstName: 'Slobodan', lastName: 'Dolinić', email: 'slobodan@digitalcube.rs', age: 18},
            10: {id: 10, firstName: 'Vladimir', lastName: 'Perić', email: 'pervlad@gmail.com', age: 18},
            11: {id: 11, firstName: 'Vukašin', lastName: 'Vučević', email: 'vukasin@digitalcube.rs', age: 18},
            12: {id: 12, firstName: 'Vladimir', lastName: 'Tarailo', email: 'vladimirtarailo@gmail.com', age: 18},
            13: {id: 13, firstName: 'Mladen', lastName: 'Marinković', email: 'mladen.marinkovic.788@gmail.com', age: 18},
            14: {id: 14, firstName: 'Jovan', lastName: 'Đelić', email: 'jdjelic@gmail.com', age: 18}
        };

        this.getAllUsers = function () {
            return usersListMock;
        };

        this.addNewUser = function (user) {
            let randomId = Math.floor(Math.random() * 90000) + 10000;
            user.id = randomId;
            usersListMock[randomId] = user;
        }

        this.get = function(userId) {
            return usersListMock[userId];
        }
    });
}