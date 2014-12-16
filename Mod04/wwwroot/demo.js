(function () {

    $(function () {

        //$("#source").draggable();
        //$('#target').droppable({
        //    drop: function () {
        //        console.log('I was dropped on');
        //    }
        //})

        $('#target').resizable();

        $('#btn').click(function () {

            //$('#target').toggle('puff');

            //$('#target').switchClass('green', 'red', 2500, 'easeInOutBounce');
            $('#target').makeRed().switchClass('red', 'green', 2500, 'easeInOutBounce');;
        })
    })


    $.fn.makeRed = function(){
        this.addClass('red');

        return this;
    }

})();