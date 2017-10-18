/**
 * Created by 胡玉君 on 2017/6/22.
 */
window.onload = function () {
    let xuan = document.querySelectorAll(".banna-zuo");
    let xaunxian = document.querySelectorAll(".bannaxuan");
    xuan.forEach(function (a, b) {
        a.onmouseover = function () {
            xaunxian[b].classList.add("bannaxuante");
            a.classList.add("banna-zuohover")
        }
        a.onmouseout = function () {
            a.classList.remove("banna-zuohover")
            xaunxian[b].classList.remove("bannaxuante");
        }
    })


    let bannaimg = document.querySelectorAll(".bannaimg>img");
    let bananlunbo = document.querySelectorAll(".banna-lunbodian");
    let index = 0;

    function move() {
        index++;
        if (index >= bannaimg.length) {
            index = 0;
        }
        bannaimg.forEach(function (a) {
            a.classList.remove("bannaimgte")
        })
        bananlunbo.forEach(function (b) {
            b.classList.remove("banna-lunbodianhover");
        })
        bananlunbo[index].classList.add("banna-lunbodianhover");
        bannaimg[index].classList.add("bannaimgte")
    }

    let t = setInterval(move, 2000);
    let bannada = document.querySelector(".banna");
    bannada.onmouseover = function () {
        clearInterval(t)
    }
    bannada.onmouseout = function () {
        t = setInterval(move, 2000);
    }
    bananlunbo.forEach(function (m, n) {
        m.onclick = function () {
            bannaimg.forEach(function (a) {
                a.classList.remove("bannaimgte")
            })
            bananlunbo.forEach(function (b) {
                b.classList.remove("banna-lunbodianhover");
            })
            m.classList.add("banna-lunbodianhover")
            bannaimg[n].classList.add("bannaimgte")
            index = n;
        }
    })

    let back = document.querySelector(".backone")
    back.onclick = function () {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }


    let tm = document.querySelector(".tianmaotop");
    let tmback = document.querySelector(".back");
    let tmbacknav = document.querySelectorAll(".backnav");
    let tmzhwen = document.querySelectorAll(".zhwen");
    let tmflag = true;
    let tmflag1 = false;
    window.onscroll = function () {
        let top = document.body.scrollTop ? document.body : document.documentElement;
        tmzhwen.forEach(function (a, b) {
            if (top.scrollTop >= a.offsetTop - 200) {
                tmbacknav.forEach(function (m) {
                    m.classList.remove("backnavte")
                })
                tmbacknav[b].classList.add("backnavte")
            }
        })
        if (top.scrollTop >= 700) {
            if (tmflag) {
                tmflag = false;
                animate(tm, {top: 0}, 200)
                animate(tmback, {width: 30, height: 150}, 200, function () {
                    tmflag1 = true;
                })
            }
        } else {
            if (tmflag1) {
                tmflag1 = false;
                animate(tm, {top: -50}, 200)
                animate(tmback, {width: 0, height: 0}, 200, function () {
                    tmflag = true;
                })
            }
        }
    }
    tmbacknav.forEach(function (m, n) {
        m.onclick = function () {
            tmbacknav.forEach(function (x) {
                x.classList.remove("backnavte")
            })
            m.classList.add("backnavte");
            let tmzhwentop = tmzhwen[n].offsetTop - 50;
            animate(document.body, {scrollTop: tmzhwentop}, 500);
            animate(document.documentElement, {scrollTop: tmzhwentop}, 500);
        }
    })

    let tmyzi = document.querySelectorAll(".tmrightzi");
    let tmyxain = document.querySelectorAll(".tmrightxain");
    tmyzi.forEach(function (a, b) {
        a.onmouseover = function () {
            animate(tmyxain[b],{right:35,opacity:1},200);
            tmyxain[b].classList.add("tmrightxainte");
        }
        a.onmouseout=function () {
            tmyxain[b].style.right="65px";
            tmyxain[b].style.opacity="0";
            tmyxain[b].classList.remove("tmrightxainte");
        }
    })
    
    let toubaoxianzi=document.querySelectorAll(".toubaoxianzi");
    let toubaoxian=document.querySelectorAll(".toubaoxian");
    toubaoxianzi.forEach(function (m,n) {
        m.onmouseover=function () {
            m.classList.add("toubaoxianzite");
            toubaoxian[n].classList.add("toubaoxiante");
        }
        m.onmouseout=function () {
            m.classList.remove("toubaoxianzite");
            toubaoxian[n].classList.remove("toubaoxiante");
        }
    })

    let shoujizi=document.querySelector(".shoujizi");
    let shoujixian=document.querySelector(".shoujixian");
    shoujizi.onmouseover=function () {
        shoujizi.classList.add("toubaoxianzite");
        shoujixian.classList.add("toubaoxiante");
    }
    shoujizi.onmouseout=function () {
        shoujizi.classList.remove("toubaoxianzite");
        shoujixian.classList.remove("toubaoxiante");
    }

}