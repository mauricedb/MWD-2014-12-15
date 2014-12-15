(function () {
    'use strict';

    //var x = 1;
    //
    //console.log(x);
    //
    //
    //setTimeout(function(){
    //    console.log(x);
    //}, 500);


    var data = [1, 2, 3, 4, 5];
    data[7] = 7;

    var sum = 0;
    //for (var i = 0; i < data.length; i++) {
    //    if (data[i] !== undefined) {
    //        console.log(sum, data[i])
    //        sum += data[i];
    //    }
    //}
    iterate(data, function (item) {
        sum += item;
    })
    console.log('Sum:', sum);


    var product = 1;
    //for (var i = 0; i < data.length; i++) {
    //    if (data[i]) {
    //        product *= data[i];
    //    }
    //}
    iterate(data, function (item) {
        product *= item;
    })

    console.log('product:', product);

    product = 1;
    data.forEach(function (item) {
        product *= item;
    })
    console.log('product:', product);

    product = data.reduce(function (p, c) {
        return p * c;
    }, 1);
    console.log('product:', product);

    function iterate(list, fn) {
        for (var i = 0; i < list.length; i++) {
            if (list[i]) {
                fn(list[i]);
            }
        }
    }


    function createNested() {
        var now = new Date();
        setInterval(function () {
            now = new Date();
        }, 2500);

        return function () {
            console.log(now);
        }
    }


    //var inner = createNested();
    //setInterval(inner, 1000);
    //inner();


    var fnLength = function (x, y) {
    };
    console.log(fnLength.length);


    var o1 = {
        x: 123
        //f: function () {
        //    //console.log(this);
        //    //console.log(this.x);
        //    console.log(o1.x);
        //}
    };

    function printX() {
        console.log(this.x);
    }

    o1.f = printX.bind(o1);


    o1.f();

    var f2 = o1.f;
    f2();
    f2.apply({bla: 1, x: 5});

    var o2 = {
        x: 789,
        f: f2
    }

    o2.f();


    var x = 1;
    var y = '1';

    console.log(x !== y);


    console.log(new Date(2014, -112, 1500));


    function xxx() {
        return {
            x: 1
        };
    }

    console.log(xxx());


    var xyz = 12;
    console.log(xyz);


    function add() {
        var sum = 0;
        for (var i =0; i < arguments.length; i++){
            sum += (+ arguments[i]);
        }
        return sum;
    }

    console.log(add(1));
    console.log(add(1, 2));
    console.log(add(1, 2, 3));
    console.log(add(1, '2', 3));
})();

