(function () {
    var app = angular.module('booksApp', []);

    app.controller('booksCtrl', function ($scope, $http) {
        var promise = $http.get('/api/books');

        promise.then(function success(e) {
            $scope.books = e.data;
        }, function error(e) {
            console.log(e);
        });


        $scope.addBook = function () {
            var promise2 = $http.post('/api/books', {
                title: 'New book',
                author: 'Me'
            });

            promise2.then(function success(e) {
                console.log(e);
            }, function error(e) {
                console.log(e);
            });
        }
    });




})();