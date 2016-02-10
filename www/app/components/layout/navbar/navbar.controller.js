const DI = ['$location'];

export default class NavbarController {
    constructor($location) {
        this._$location = $location;
        this.menuItems = [
            {title: 'Two-way binding', path: '/demo-input'},
            {title: 'Interval', path: '/demo-interval'},
            {title: 'Services', path: '/demo-service-call'},
            {title: 'Users', path: '/users'},
            {title: 'About', path: '/about'}
        ];
    }

    getClass(path) {
        return this._$location.url().indexOf(path) !== -1 ? 'active' : '';
    }
}

NavbarController.$inject = DI;