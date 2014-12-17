(function () {
    angular.module('demoApp', [])
        .controller('CustomerCtrl', ['$scope', 'customerDataFactory', function ($scope, customerDataFactory) {

            console.log($scope);

            $scope.customer = customerDataFactory.getCustomer();

            $scope.customers = customerDataFactory.getCustomers();

            $scope.save = function (customer) {
                customerDataFactory.save(customer);
            }
        }]).factory('customerDataFactory', function () {
            return {
                getCustomers: function () {
                    console.log('getCustomers')
                    return [{
                        customerName: 'RBS 1'
                    }, {
                        customerName: 'RBS 2'
                    }, {
                        customerName: 'RBS 3'
                    }];
                },
                getCustomer: function () {
                    return {
                        customerName: 'RBS'
                    };
                },
                save: function (customer) {
                    console.log('Saving ', customer.customerName)
                }
            };
        });
})();
