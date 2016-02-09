export default class Controller {

    constructor() {
        this.inputValue = 'Digital Cube';
        this.cb1 = true;
        this.d1 = new Date(2013, 9, 22);
    }

    submit() {
        alert(this.inputValue);
        return false;
    }

    clear() {
        this.inputValue = '';
    }

}