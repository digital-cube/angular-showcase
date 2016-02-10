/**
 * Created by Savo on 10-Feb-16.
 */

import angular from 'angular';
import 'angular-mocks';
import './user.module';
import UsersController from './login.controller';

let users = {
    1: {id: 1, firstName: 'Savo', lastName: 'Garovic', email: 'savo.garovic@gmail.com', age: 29},
    2: {id: 2, firstName: 'Igor', lastName: 'Jeremic', email: 'igor@digitalcube.com', age: 39}
};

describe('Users Controller', () => {
    let usersController, usersService, $uibModal, $q, $rootScope;

    beforeEach(angular.mock.module('dcUsers', function() {}));

    beforeEach(angular.mock.inject(function(_UsersService_, _$q_, _$rootScope_, _$uibModal_) {
        usersService = _UsersService_;
        $q = _$q_;
        $rootScope = _$rootScope_;
        $uibModal = _$uibModal_;
    }));

    beforeEach(inject(function() {
        usersController = new UsersController($uibModal, users);
    }));

    it('should exist', () => {
        expect(usersController).toBeDefined();
    });

    it('should set dependencies', () => {
        expect(usersController.$uibModal).toEqual($uibModal);
        expect(usersController.users).toEqual(users);
    });
});
