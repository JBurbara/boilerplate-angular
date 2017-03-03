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
