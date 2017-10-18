/**
 * Created by 胡玉君 on 2017/7/20.
 */
$(document).ready(function () {
    $(window).scroll(function () {
        let skilltop=$(".skill").offset()
        let doctop=$(window).scrollTop()
        let livetop=$(".live").offset()
        let livehe=$(".live").height()
        // console.log(livetop,livehe,doctop,skilltop)
        if (skilltop.top-600<doctop&&skilltop.top+450>doctop){
            $(".da").addClass("active")
        }else {
            $(".da").removeClass("active")
        }
    })
    $(".JieShou div div").click(function () {
        $("html,body").animate({scrollTop:$(".live").offset().top+50},500)
    })
    let live=document.querySelector(".live")
    let livetop=live.offsetTop
    let livehe=$(".live").height()
    window.onscroll=function () {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top>livetop-400&&top<livetop+livehe){
            $(".live li a>div").addClass("active")
        }else {
            $(".live li a>div").removeClass("active")
        }
    }

})