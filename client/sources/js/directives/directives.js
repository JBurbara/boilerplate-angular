'use strict';

const searchController = require('./searchController');

const app = angular.module('directives', []);

createDirective('headerDirective', { controller: searchController, templateUrl: '/views/directives/header-directive.html' });
createDirective('searchResultsDirective', { templateUrl: '/views/directives/search-results-directive.html' });
createDirective('featuredItemsDirective', { templateUrl: '/views/directives/featured-items-directive.html' });
createDirective('newestItemsDirective', { templateUrl: '/views/directives/newest-items-directive.html' });
createDirective('itemEntryDirective', { templateUrl: '/views/directives/item-entry-directive.html' });
createDirective('resultItemDirective', { templateUrl: '/views/directives/result-item-directive.html' });
createDirective('welcome', { templateUrl: '/views/directives/welcome.html' });


module.exports = app;

function createDirective(name, props) {
    var defaults = {
        restrict: 'AE',
        replace: true,
        transclude: true,
        scope: '=scope',
        link: function(scope, element, attrs) {}
    };

    if (typeof props == 'function') {
        return app.directive(name, props);
    }

    app.directive(name, function () {
        Object.assign(defaults, props);
        return props;
    });
}

