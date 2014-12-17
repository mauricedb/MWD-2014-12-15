(function () {

    var app = angular.module('demoApp', []);


    app.directive('myDemo1', function ($http) {

        return {
            restrict: 'EA',
            scope: true,
            link: function (scope, element) {
                console.log('myDemo1 was activated.')
console.log(element);
                element.bind('click', function(){
                    console.log('clicked')
                });
            }
        }
    })

})();