'use strict';

/* Controllers */

angular.module('myApp.controllers', ['jm.i18next']).
controller('MyCtrl1', ['$scope',

    function($scope) {
        var number = 5555;

        // request a currency format
        console.log(number.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        }));
        // → 123.456,79 €

        // the Japanese yen doesn't use a minor unit
        console.log(number.toLocaleString("ja-JP", {
            style: "currency",
            currency: "JPY"
        }))
        // → ￥123,457

        // limit to three significant digits
        console.log(number.toLocaleString("en-IN", {
            maximumSignificantDigits: 3
        }));
        // → 1,23,000
        $scope.num = number.toLocaleString("ja-JP");
    }
])
    .controller('MyCtrl2', [

        function() {

        }
    ]);