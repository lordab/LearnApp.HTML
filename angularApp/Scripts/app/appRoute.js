var appDef = angular.module("angularApp", ['ngRoute']);

appDef.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('index', {
            templateUrl: 'Index.html'
        })
        .otherwise({
            redirectTo: 'Index.html'
        });
    }]);