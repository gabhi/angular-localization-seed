'use strict';

/* Directives */


angular.module('myApp.directives', []).
directive('appVersion', ['version',
    function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }
]);
angular.module('jm.i18next').config(['$i18nextProvider',
    function($i18nextProvider) {
        $i18nextProvider.options = {
            lng: 'de',
            useCookie: false,
            useLocalStorage: false,
            fallbackLng: 'dev',
            resGetPath: '../locales/__lng__/__ns__.json'
        };
    }
]);