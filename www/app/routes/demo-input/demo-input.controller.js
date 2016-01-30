export default class Controller {

    constructor() {
        this.input_content = 'nemanja';
        this.cb1=true;
        this.d1=new Date(2013, 9, 22);
    }

    submit() {
        alert(this.input_content);
        return false;
    }
    clear() {
        this.input_content = '';
    }

}