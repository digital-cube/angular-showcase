const DI = ['$location'];

export default class Controller {
    constructor($location) {
        this._$location = $location;
        this.menuItems = [
            {title: 'Two-way binding', path: '/demo-input'},
            {title: 'Interval', path: '/demo-interval'},
            {title: 'Services', path: '/demo-service-call'},
            {title: 'Users', path: '/users'}
        ];
    }

    getClass(path) {
        return this._$location.url().indexOf(path) !== -1 ? 'active' : '';
    }
}

Controller.$inject = DI;