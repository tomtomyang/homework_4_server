$(document).ready(function () {

    $('.sign-pop').hide();
    $('.scoreboard').hide();
    $('.scoreexplain').hide();

    $("#sign").click(function () {
        $('.sign-pop').show();
        $('.cover').css('display', 'block');
    });

    $(".cover").click(function () {
        $('.sign-pop').hide();
        $('.cover').css('display', 'none');
    });

    $("#score_board").click(function () {
        $('.introduce').hide();
        $('.scoreexplain').hide();
        $('.scoreboard').show();
    });

    $("#score_explain").click(function () {
        $('.introduce').hide();
        $('.scoreboard').hide();
        $('.scoreexplain').show();
    });


});