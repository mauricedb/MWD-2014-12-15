$(function () {
    var chatHub = $.connection.chatHub;

    chatHub.client.broadcast = function (message) {
        $('<li>').text(message).prependTo('#msgs')
    }

    $.connection.hub.start().then(function () {
        $('#send').click(function () {
            chatHub.server.sendMessage($('#msg').val());
        })
    });

})