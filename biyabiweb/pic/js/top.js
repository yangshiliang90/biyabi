
function b() {
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > h){
		$('#backToTop').show();
	}else{
		$('#backToTop').hide();
	}
}
$(function(){
	b();
	$('#gotop').click(function(){
		$(document).scrollTop(0);	
	})
	$(".nofollow").mouseover(function(){
		$(this).css("backgroundPositionX", "-186px");
		$(this).find("span").css("display","block");
	});
	$(".nofollow").mouseout(function(){
		$(this).css("backgroundPositionX", "-224px");
		$(this).find("span").css("display","none");
	});
});

$(window).scroll(function(e){
	b();		
})

//function DrawImage(ImgD, sizes) {
//    var image = new Image();
//    image.src = ImgD.src;
//    if (image.width > 0 && image.height > 0) {
//        if (image.width > image.height) {
//            ImgD.style.width = sizes + 'px';
//            ImgD.style.height = ((image.height * sizes) / image.width) + 'px';
//            ImgD.style.marginTop = ((ImgD.width - ImgD.height) / 2) + 'px';
//        }
//        else {
//            ImgD.style.height = sizes + 'px';
//            ImgD.style.width = ((image.width * sizes) / image.height) + 'px';
//            ImgD.style.marginTop = '0px';
//        }
//    }
//}


function DrawImage(ImgD, sizes) {
    var image = new Image();
    image.src = ImgD.src;
    if (image.width > 0 && image.height > 0) {
        if (image.width > image.height) {
            var imgHeight = (image.height * sizes) / image.width;
            ImgD.style.width = sizes + 'px';
            ImgD.style.height = imgHeight + 'px';
            ImgD.style.marginTop = ((sizes - imgHeight) / 2) + 'px';
        }
        else {
            ImgD.style.height = sizes + 'px';
            ImgD.style.width = ((image.width * sizes) / image.height) + 'px';
            ImgD.style.marginTop = '0px';
        }
    }
}

BTool = {
    Ajax: function (option) {
        var def = { type: "post", data: "", dataType: "json", before: function () { } };
        var opts = $.extend(def, option);
        burl = ((opts.request.indexOf("?") == -1) ? "?" : "&") + "_rnd=" + new Date().getTime();
        $.ajax({ type: opts.type, url: opts.request + burl, data: opts.data, dataType: opts.dataType, beforeSend: opts.before, success: opts.respon });
    }
};
$(document).ready(function () {
    var HttpBaseURL = "http://localhost:57593/";
    //var HttpBaseURL = "http://item.biyabi.com/";
    // 鼠标指向购物车时
    $(".gouwuche").mousemove(function () {
        //BTool.Ajax({
        //    request: HttpBaseURL + "BiyabiWeb/Ajax/GetCart.ashx",
        //    respon: function (res) {
        //        if (res.is_success == "1") {
        //            alert(res.strHtml);
        //            $(".gouwuchebox").html(res.strHtml);
                    
        //        }
        //    }
        //});
        var getURL = HttpBaseURL + "BiyabiWeb/Ajax/GetCart.ashx";
        //alert(getURL);
        $.get(getURL, function (data) {
            alert(data);
            data = JSON.parse(data);
            alert(data.strHtml);
            $(".gouwuchebox").html(res.strHtml);
        });
        $(".gouwuchebox").show();
    }).mouseleave(function () {
        $(".gouwuchebox").hide();
    });
    $(".gouwuchebox").mousemove(function () {
        $(this).show();
    }).mouseleave(function () {
        $(this).hide();
    });
});