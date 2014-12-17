/**
 * Created by Instructor on 17/12/2014.
 */

describe('The customerDataFactory', function () {
    var customerDataFactory;
    beforeEach(module('demoApp'));

    beforeEach(inject(function (_customerDataFactory_) {
        customerDataFactory = _customerDataFactory_;
    }));

    it('should return customers', function () {

        var result = customerDataFactory.getCustomers();

        expect(result.length).toBe(3);
    })
});


describe('the CustomerCtrl', function () {
    var customerCtrl, customerDataFactory;

    beforeEach(module('demoApp'));

    beforeEach(inject(function ($controller, $rootScope, _customerDataFactory_) {
        customerDataFactory = _customerDataFactory_;

        spyOn(customerDataFactory, 'getCustomers');

        customerCtrl = $controller('CustomerCtrl', {
            $scope: $rootScope.$new(),
            customerDataFactory: _customerDataFactory_
        })
    }));

    it('should be created', function () {

        expect(customerCtrl).toBeDefined();
    })


    it('should call getCustomers()', function () {


        expect(customerDataFactory.getCustomers).toHaveBeenCalled()

    })
})
