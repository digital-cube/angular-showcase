import template from './footer.html!text';

export default function dcFooter(){
    var directive = {
        restrict: 'E',
        template: template,
        scope: {}
    };

    return directive;
}

