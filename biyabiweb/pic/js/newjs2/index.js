/**
 * Created by Zhang on 2016/4/27.
 */
$(document).ready(function(){
    //计算首页顶部导航条位置的高度
    setInterval(function(){
        //计算顶部导航的高度
        var pHeight = parseInt($('.header .nav .left-logo').css('height'));
        $('.right-menu').css('height',pHeight+'px');

        //计算尖货图片的高度
        $('.jh-item').each(function(){
            var jhHeight = parseInt($(this).children('.jh-img').css('height'));
            $(this).children('.jh-text').css('height',jhHeight+'px');
        });

        //计算手风琴外层盒子的高度
        var sfqHeight = parseInt($('.accordion__ul').css('height'));
        $('.accordion').css('height',sfqHeight+'px');
    },30);

    setInterval(function(){
        //if($('#jhBoxOne').hasClass('on')){
        //    $('#jhBoxOne').removeClass('on');
        //    $('#jhBoxTwo').addClass('on');
        //}else if($('#jhBoxTwo').hasClass('on')){
        //    $('#jhBoxTwo').removeClass('on');
        //    $('#jhBoxOne').addClass('on');
        //}

        if ($('#jhBoxOne').hasClass('on')) {
            $('#jhBoxOne').hide().removeClass('on');
            $('#jhBoxTwo').fadeIn(300, function () {
                $(this).addClass('on')
            });
        } else if ($('#jhBoxTwo').hasClass('on')) {
            $('#jhBoxTwo').hide().removeClass('on');
            $('#jhBoxOne').fadeIn(300, function () {
                $(this).addClass('on')
            });
        }

    },9000);

    //页面开始滚动时控制导航样式
    $(window).on('scroll',function(){
       if($(document).scrollTop()>0){
           $('#homeNav').addClass('on');
           $('#aboutNav').addClass('on');
       }else{
           $('#homeNav').removeClass('on');
           $('#aboutNav').removeClass('on');
       }
    });

    //关于我们页面
    //团队介绍效果
    //1.获取第二个隐藏div的高度
    $('.member-box .member-item').each(function () {
        var obj = $(this);
        //var secondHeight = parseInt(obj.children('.show-second').css('height'));
        var lastPHeight = parseInt(obj.children(".show-first").find("p:last").css('height'));
        var lastPMargin = parseInt(obj.children(".show-first").find("p:last").css('margin-bottom'));
        var firstPadding = parseInt(obj.children(".show-first").css('padding-bottom'));
        var firstPos = lastPHeight + lastPMargin + firstPadding;
        obj.children('.show-first').css({
            bottom: -firstPos + 'px'
        });
        obj.on('mouseover', function () {
            obj.children('.show-first').css({
                bottom: '0'
            });
        });
        obj.on('mouseleave', function () {
            obj.children('.show-first').css({
                bottom: -firstPos + 'px'
            });
        })
    });
});













