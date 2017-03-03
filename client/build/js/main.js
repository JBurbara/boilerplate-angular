/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	const directives = __webpack_require__(2);
	const routes = __webpack_require__(4);
	
	const app = angular.module('app', ['ui.router', 'directives'])
	app.config(routes);
	


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	const searchController = __webpack_require__(3);
	
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
	


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	
	module.exports = function ($scope, $rootScope) {
	
	    const demoSearch = [
	        { img: 'https://placehold.it/400x200', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.' },
	        { img: 'https://placehold.it/400x200', title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
	        { img: 'https://placehold.it/400x200', title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
	        { img: 'https://placehold.it/400x200', title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
	    ];
	
	
	    $scope.search = function () {
	
	        if (!$rootScope.model) return alert('Seleccione el model de su vehículo para realizar la búsqueda');
	        if (!$rootScope.year) return alert('Ingrese el año de su vehículo para realizar la búsqueda');
	        if (!$rootScope.query) return alert('Ingrese los términos a buscar');
	
	        $rootScope.searchResults = demoSearch;
	    };
	
	    function alert(message) {
	        $rootScope.message = message;
	        $('#validation-error').foundation('open');
	    }
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	const mainController = __webpack_require__(5);
	
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


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ($scope) {
	    $(document).foundation();
	
	    $scope.featured = [
	        { img: 'https://placehold.it/200x100', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.' },
	        { img: 'https://placehold.it/200x100', title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
	        { img: 'https://placehold.it/200x100', title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
	        { img: 'https://placehold.it/200x100', title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
	    ];
	
	    $scope.newest = [
	        { img: 'https://placehold.it/200x100', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.' },
	        { img: 'https://placehold.it/200x100', title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
	        { img: 'https://placehold.it/200x100', title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
	        { img: 'https://placehold.it/200x100', title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
	    ];
	
	};


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjA0YTNlMGEzNGY5N2NiODkzNDMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NvdXJjZXMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc291cmNlcy9qcy9kaXJlY3RpdmVzL2RpcmVjdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NvdXJjZXMvanMvZGlyZWN0aXZlcy9zZWFyY2hDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zb3VyY2VzL2pzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc291cmNlcy9qcy9jb250cm9sbGVycy9tYWluQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ05BOztBQUVBOztBQUVBOztBQUVBLHFDQUFvQyx1RkFBdUY7QUFDM0gsNENBQTJDLGlFQUFpRTtBQUM1Ryw0Q0FBMkMsaUVBQWlFO0FBQzVHLDBDQUF5QywrREFBK0Q7QUFDeEcsd0NBQXVDLDZEQUE2RDtBQUNwRyx5Q0FBd0MsOERBQThEO0FBQ3RHLDZCQUE0QixnREFBZ0Q7OztBQUc1RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7Ozs7Ozs7O0FDbENBOzs7QUFHQTs7QUFFQTtBQUNBLFVBQVMsc0pBQXNKO0FBQy9KLFVBQVMsNEpBQTRKO0FBQ3JLLFVBQVMsdUpBQXVKO0FBQ2hLLFVBQVM7QUFDVDs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFCQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE0QixHQUFHLGtCQUFrQjtBQUNqRCxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7Ozs7Ozs7QUNsQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVMsc0pBQXNKO0FBQy9KLFVBQVMsNEpBQTRKO0FBQ3JLLFVBQVMsdUpBQXVKO0FBQ2hLLFVBQVM7QUFDVDs7QUFFQTtBQUNBLFVBQVMsc0pBQXNKO0FBQy9KLFVBQVMsNEpBQTRKO0FBQ3JLLFVBQVMsdUpBQXVKO0FBQ2hLLFVBQVM7QUFDVDs7QUFFQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjA0YTNlMGEzNGY5N2NiODkzNDMiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvZGlyZWN0aXZlcycpO1xuY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMnKTtcblxuY29uc3QgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndWkucm91dGVyJywgJ2RpcmVjdGl2ZXMnXSlcbmFwcC5jb25maWcocm91dGVzKTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvc291cmNlcy9qcy9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc2VhcmNoQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vc2VhcmNoQ29udHJvbGxlcicpO1xuXG5jb25zdCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnZGlyZWN0aXZlcycsIFtdKTtcblxuY3JlYXRlRGlyZWN0aXZlKCdoZWFkZXJEaXJlY3RpdmUnLCB7IGNvbnRyb2xsZXI6IHNlYXJjaENvbnRyb2xsZXIsIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL2RpcmVjdGl2ZXMvaGVhZGVyLWRpcmVjdGl2ZS5odG1sJyB9KTtcbmNyZWF0ZURpcmVjdGl2ZSgnc2VhcmNoUmVzdWx0c0RpcmVjdGl2ZScsIHsgdGVtcGxhdGVVcmw6ICcvdmlld3MvZGlyZWN0aXZlcy9zZWFyY2gtcmVzdWx0cy1kaXJlY3RpdmUuaHRtbCcgfSk7XG5jcmVhdGVEaXJlY3RpdmUoJ2ZlYXR1cmVkSXRlbXNEaXJlY3RpdmUnLCB7IHRlbXBsYXRlVXJsOiAnL3ZpZXdzL2RpcmVjdGl2ZXMvZmVhdHVyZWQtaXRlbXMtZGlyZWN0aXZlLmh0bWwnIH0pO1xuY3JlYXRlRGlyZWN0aXZlKCduZXdlc3RJdGVtc0RpcmVjdGl2ZScsIHsgdGVtcGxhdGVVcmw6ICcvdmlld3MvZGlyZWN0aXZlcy9uZXdlc3QtaXRlbXMtZGlyZWN0aXZlLmh0bWwnIH0pO1xuY3JlYXRlRGlyZWN0aXZlKCdpdGVtRW50cnlEaXJlY3RpdmUnLCB7IHRlbXBsYXRlVXJsOiAnL3ZpZXdzL2RpcmVjdGl2ZXMvaXRlbS1lbnRyeS1kaXJlY3RpdmUuaHRtbCcgfSk7XG5jcmVhdGVEaXJlY3RpdmUoJ3Jlc3VsdEl0ZW1EaXJlY3RpdmUnLCB7IHRlbXBsYXRlVXJsOiAnL3ZpZXdzL2RpcmVjdGl2ZXMvcmVzdWx0LWl0ZW0tZGlyZWN0aXZlLmh0bWwnIH0pO1xuY3JlYXRlRGlyZWN0aXZlKCd3ZWxjb21lJywgeyB0ZW1wbGF0ZVVybDogJy92aWV3cy9kaXJlY3RpdmVzL3dlbGNvbWUuaHRtbCcgfSk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBhcHA7XG5cbmZ1bmN0aW9uIGNyZWF0ZURpcmVjdGl2ZShuYW1lLCBwcm9wcykge1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgIHNjb3BlOiAnPXNjb3BlJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7fVxuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHByb3BzID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGFwcC5kaXJlY3RpdmUobmFtZSwgcHJvcHMpO1xuICAgIH1cblxuICAgIGFwcC5kaXJlY3RpdmUobmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBwcm9wcyk7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9KTtcbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvc291cmNlcy9qcy9kaXJlY3RpdmVzL2RpcmVjdGl2ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSkge1xuXG4gICAgY29uc3QgZGVtb1NlYXJjaCA9IFtcbiAgICAgICAgeyBpbWc6ICdodHRwczovL3BsYWNlaG9sZC5pdC80MDB4MjAwJywgdGl0bGU6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlLicgfSxcbiAgICAgICAgeyBpbWc6ICdodHRwczovL3BsYWNlaG9sZC5pdC80MDB4MjAwJywgdGl0bGU6ICdVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LicgfSxcbiAgICAgICAgeyBpbWc6ICdodHRwczovL3BsYWNlaG9sZC5pdC80MDB4MjAwJywgdGl0bGU6ICdEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4nIH0sXG4gICAgICAgIHsgaW1nOiAnaHR0cHM6Ly9wbGFjZWhvbGQuaXQvNDAweDIwMCcsIHRpdGxlOiAnRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS4nIH1cbiAgICBdO1xuXG5cbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghJHJvb3RTY29wZS5tb2RlbCkgcmV0dXJuIGFsZXJ0KCdTZWxlY2Npb25lIGVsIG1vZGVsIGRlIHN1IHZlaMOtY3VsbyBwYXJhIHJlYWxpemFyIGxhIGLDunNxdWVkYScpO1xuICAgICAgICBpZiAoISRyb290U2NvcGUueWVhcikgcmV0dXJuIGFsZXJ0KCdJbmdyZXNlIGVsIGHDsW8gZGUgc3UgdmVow61jdWxvIHBhcmEgcmVhbGl6YXIgbGEgYsO6c3F1ZWRhJyk7XG4gICAgICAgIGlmICghJHJvb3RTY29wZS5xdWVyeSkgcmV0dXJuIGFsZXJ0KCdJbmdyZXNlIGxvcyB0w6lybWlub3MgYSBidXNjYXInKTtcblxuICAgICAgICAkcm9vdFNjb3BlLnNlYXJjaFJlc3VsdHMgPSBkZW1vU2VhcmNoO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhbGVydChtZXNzYWdlKSB7XG4gICAgICAgICRyb290U2NvcGUubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgICQoJyN2YWxpZGF0aW9uLWVycm9yJykuZm91bmRhdGlvbignb3BlbicpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50L3NvdXJjZXMvanMvZGlyZWN0aXZlcy9zZWFyY2hDb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWFpbkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL21haW5Db250cm9sbGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcbiAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoZmFsc2UpO1xuICAgICRsb2NhdGlvblByb3ZpZGVyLmhhc2hQcmVmaXgoJyEnKTtcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci53aGVuKCcnLCBmdW5jdGlvbiAoJHN0YXRlKSB7XG4gICAgICAgIC8vIGRvIG5vdCByZXdyaXRlIHRoZSB1cmxcbiAgICAgICAgJHN0YXRlLmdvKCdtYWluJywge30sIHsgbG9jYXRpb246IGZhbHNlIH0pO1xuICAgIH0pO1xuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLzQwNCcpO1xuXG4gICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ21haW4nLCB7XG4gICAgICAgIHVybDogJy9pbmRleCcsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvbWFpbi5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBtYWluQ29udHJvbGxlclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnbm90LWZvdW5kJywge1xuICAgICAgICB1cmw6ICcvNDA0JyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgIG1haW46IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy92aWV3cy9ub3QtZm91bmQuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogbWFpbkNvbnRyb2xsZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50L3NvdXJjZXMvanMvcm91dGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgJChkb2N1bWVudCkuZm91bmRhdGlvbigpO1xuXG4gICAgJHNjb3BlLmZlYXR1cmVkID0gW1xuICAgICAgICB7IGltZzogJ2h0dHBzOi8vcGxhY2Vob2xkLml0LzIwMHgxMDAnLCB0aXRsZTogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUuJyB9LFxuICAgICAgICB7IGltZzogJ2h0dHBzOi8vcGxhY2Vob2xkLml0LzIwMHgxMDAnLCB0aXRsZTogJ1V0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuJyB9LFxuICAgICAgICB7IGltZzogJ2h0dHBzOi8vcGxhY2Vob2xkLml0LzIwMHgxMDAnLCB0aXRsZTogJ0R1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLicgfSxcbiAgICAgICAgeyBpbWc6ICdodHRwczovL3BsYWNlaG9sZC5pdC8yMDB4MTAwJywgdGl0bGU6ICdFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLicgfVxuICAgIF07XG5cbiAgICAkc2NvcGUubmV3ZXN0ID0gW1xuICAgICAgICB7IGltZzogJ2h0dHBzOi8vcGxhY2Vob2xkLml0LzIwMHgxMDAnLCB0aXRsZTogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUuJyB9LFxuICAgICAgICB7IGltZzogJ2h0dHBzOi8vcGxhY2Vob2xkLml0LzIwMHgxMDAnLCB0aXRsZTogJ1V0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuJyB9LFxuICAgICAgICB7IGltZzogJ2h0dHBzOi8vcGxhY2Vob2xkLml0LzIwMHgxMDAnLCB0aXRsZTogJ0R1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLicgfSxcbiAgICAgICAgeyBpbWc6ICdodHRwczovL3BsYWNlaG9sZC5pdC8yMDB4MTAwJywgdGl0bGU6ICdFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLicgfVxuICAgIF07XG5cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9zb3VyY2VzL2pzL2NvbnRyb2xsZXJzL21haW5Db250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=