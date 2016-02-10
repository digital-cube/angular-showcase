const DI = ['$http'];

export default class Controller {
    constructor($http) {
        this.baseUrl = "http://jsonplaceholder.typicode.com";
        this.$http = $http;
        this.response  = '';
    }

    showContent() {
        // Simple GET request example
        this.$http({
            method: 'GET',
            url: this.baseUrl + '/posts/1'
        }).then((response) => {
            console.log(response);
            let formattedJson = JSON.stringify(response.data, null, 4); // Indented 4 spaces
            this.response = formattedJson;
        }, (errorResponse) => {
            console.error(errorResponse);
            this.response = 'Error';
        });
    }

}

Controller.$inject = DI;