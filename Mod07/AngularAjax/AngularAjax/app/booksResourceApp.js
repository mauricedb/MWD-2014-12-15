(function () {
    var app = angular.module('booksApp', ['ngResource']);

    app.factory('book', function($resource) {
        return $resource('/api/books');
    });

    app.controller('booksCtrl', function ($scope, book) {
        $scope.books = book.query();
        console.log($scope.books.length);
        $scope.books.$promise.then(function() {
            console.log($scope.books.length);
        });

        $scope.addBook = function () {
            book.save({
                title: 'New book',
                author: 'Me'
            });
        }
    });




})();