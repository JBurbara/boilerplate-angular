'use strict';

const mainController = require('./controllers/mainController');

module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');

    $urlRouterProvider.when('', function ($state) {
        // do not rewrite the url
        $state.go('main', {}, { location: false });
    });

    $urlRouterProvider.otherwise('/404');

    $stateProvider.state('main', {
        url: '/index',
        views: {
            main: {
                templateUrl: '/views/main.html',
                controller: mainController
            }
        }
    });

    $stateProvider.state('not-found', {
        url: '/404',
        views: {
            main: {
                templateUrl: '/views/not-found.html',
                controller: mainController
            }
        }
    });
};
