(function () {
    'use strict';

    function Person(name) {
        if (this === window) throw new Error('Please use new')

        this.name = name;
    }

    Person.prototype.age = function () {
        return 52;
    }


    function Manager(name) {
        this.name = name;
    }

    Manager.prototype = new Person();
    Manager.prototype

    var me = new Person('Maurice');
    console.log(me.name, 'is', me.age());

    var martine = new Manager('Martine');
    martine.age = function () {
        return 44;
    };
    console.log(martine.name, 'is', martine.age());

delete martine.age;
    //delete Person.prototype.age;
    
    console.log(martine.name, 'is', martine.age());

    //console.log(martine);
})();