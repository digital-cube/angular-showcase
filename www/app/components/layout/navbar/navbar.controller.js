const DI = ['$location'];

export default class NavbarController {
    constructor($location) {
        this._$location = $location;
        this.menuItems = [
            {title: 'Home', path: '/'},
            {title: 'Two-way binding', path: '/demo-input'},
            {title: 'Interval', path: '/demo-interval'},
            {title: 'Services', path: '/demo-service-call'},
            {title: 'Users', path: '/users'},
            {title: 'About', path: '/about'}
        ];
    }

    getClass(path) {
        return path === this._$location.url() ? 'active' : '';
    }
}

NavbarController.$inject = DI;