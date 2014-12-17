(function () {


    angular.module('demoApp', [])
        .controller('PersonCtrl', function ($scope) {

            $scope.person = {
                name: 'Maurice'
            };

            $scope.save = function () {

                alert('Saving ' + JSON.stringify($scope.person));
            }
        })
        .controller('CustomerCtrl', ['$scope', 'mySvc', 'customerDataFactory', function ($scope2, mySvc21, customerDataFactory) {
            console.log('Created CustomerCtrl');
            $scope2.customer = customerDataFactory.getCustomer();

            $scope2.customers = customerDataFactory.getCustomers();
        }])
        .service('mySvc', function () {

        }).service('customerData', function () {
            this.getCustomers = function () {
                return [
                    {
                        customerName: 'RBS 1'
                    },
                    {
                        customerName: 'RBS 2'
                    },
                    {
                        customerName: 'RBS 3'
                    }
                ];
            };

            this.getCustomer = function () {
                return {
                    customerName: 'RBS'
                };
            };
        }).factory('customerDataFactory', function () {
            return {
                getCustomers: function () {
                    return [
                        {
                            customerName: 'RBS 1'
                        },
                        {
                            customerName: 'RBS 2'
                        },
                        {
                            customerName: 'RBS 3'
                        }
                    ];
                },
                getCustomer: function () {
                    return {
                        customerName: 'RBS'
                    };
                }
            };
        });

})();