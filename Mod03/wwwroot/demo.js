$(function () {
    console.log('Document ready');

    $('button').css('color', 'green');
    $('li').css('color', 'green');
    $('li:last').css('color', 'red');

    console.log($('li').text());
    $('li')
        .text('Something else')
        .attr('xyz', 42);

    console.log($('button').attr('xyz'));

    console.log($('li'));
    console.log($('li')[0]);

    $('#btn').click(function () {

        //$('ul').slideToggle(5000);
        //$('ul').fadeToggle(5000);

        $('ul').empty();

    });
})