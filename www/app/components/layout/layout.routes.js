/**
 * Created by Savo on 09-Feb-16.
 */

import template from './layout.html!text';
import LayoutController from './layout.controller';

export default function (module) {
    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('app', {
            abstract: true,
            template: template,
            controller: LayoutController,
            controllerAs: 'vm'
        });
    }
    ]);
}