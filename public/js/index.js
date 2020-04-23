$(document).ready(function () {
    //获取当前用户信息
    $.ajax({
        type: 'post',
        url: 'http://localhost:3000/Login',
        success: function (data) {
            //获取用户信息更改相应模板
            var html_name = template('user_name_tpl', {
                username: data.name
            });
            $('#user_name').html(html_name);
            var html_score = template('user_score_tpl', {
                userscore: data.score
            });
            $('#user_score').html(html_score);
            var html_ranking = template('user_ranking_tpl', {
                userranking: data.ranking
            });
            $('#user_ranking').html(html_ranking);
            var html_signdays = template('user_signdays_tpl', {
                usersigndays: data.signdays
            });
            $('#user_signdays').html(html_signdays);
            //给签到弹窗的按钮添加已经签到样式
            for(var i=1;i<=data.signdays;i++){
                $('#check_'+i).addClass("check-box-active");
            }
        }
    });

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
        //获取排名
        $.ajax({
            type: 'post',
            url: 'http://localhost:3000/Scoreboard',
            success: function (data) {
                var html = template('scoreboard_tpl', {
                    user: data
                });
                $('#scoreboard').html(html);
            }
        });
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