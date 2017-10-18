/**
 * Created by 胡玉君 on 2017/6/20.
 */
window.onload = function () {
    let da = document.querySelector(".banner-zh");
    let bannazhtu = document.querySelector(".bannazhtu");
    let bannazhtuimg = document.querySelectorAll(".bannazhtu>img");
    let luobo = document.querySelectorAll(".banner-zh>ul>li");
    let index = 0;
    let next = 0;
    let flag = true;
    let t = setInterval(move, 2000);

    function move() {
        next = index + 1;
        if (next >= bannazhtuimg.length) {
            next = 0
        }
        bannazhtuimg[next].style.left = "740px";
        animate(bannazhtuimg[index], {left: -740}, 200, Tween.Linear, function () {
            flag = true
        });
        animate(bannazhtuimg[next], {left: 0}, 200, Tween.Linear, function () {
            flag = true
        });
        luobo[next].classList.add("bannaluobo");
        luobo[index].classList.remove("bannaluobo");
        index = next;
    }

    da.onmouseover = function () {
        clearInterval(t)
    }
    da.onmouseout = function () {
        t = setInterval(move, 2000);
    }
    let left = document.querySelector(".banner-zh-zuo");
    let right = document.querySelector(".banner-zh-you");
    right.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    }
    left.onclick = function () {
        if (flag) {
            flag = false;
            next = index - 1;
            if (next < 0) {
                next = bannazhtuimg.length - 1
            }
            bannazhtuimg[next].style.left = "-740px";
            animate(bannazhtuimg[index], {left: 740}, 200, Tween.Linear, function () {
                flag = true
            });
            animate(bannazhtuimg[next], {left: 0}, 200, Tween.Linear, function () {
                flag = true
            });
            luobo[next].classList.add("bannaluobo");
            luobo[index].classList.remove("bannaluobo");
            index = next;
        }
    }
    luobo.forEach(function (a, b) {
        a.onclick = function () {
            if (flag) {
                flag = false
                if (b > index) {
                    bannazhtuimg[b].style.left = "740px";
                    animate(bannazhtuimg[index], {left: -740}, 200, Tween.Linear, function () {
                        flag = true
                    });
                    animate(bannazhtuimg[b], {left: 0}, 200, Tween.Linear, function () {
                        flag = true
                    });
                    luobo[b].classList.add("bannaluobo");
                    luobo[index].classList.remove("bannaluobo");
                    index = b;
                } else if (b < index) {
                    bannazhtuimg[b].style.left = "-740px";
                    animate(bannazhtuimg[index], {left: 740}, 200, Tween.Linear, function () {
                        flag = true
                    });
                    animate(bannazhtuimg[b], {left: 0}, 200, Tween.Linear, function () {
                        flag = true
                    });
                    luobo[b].classList.add("bannaluobo");
                    luobo[index].classList.remove("bannaluobo");
                    index = b;
                } else {
                    return;
                }
            }
        }
    })


    // let lunbotu1=document.querySelectorAll(".lunbotu-tu");
    let lunboda = document.querySelector(".luobo-main");
    let lunbotu = document.querySelector(".lunbotu");
    let luoboleft = document.querySelector(".lunbo-zuo");
    let luoboright = document.querySelector(".lunbo-you");
    let lunboflag = true;
    function lunbomove() {
        let lda = document.querySelector(".lunboda");
        let lunbowidth = lda.offsetWidth/4;
        animate(lunbotu, {left: -lunbowidth}, 500, function () {
            lunboflag = true;
            lunbotu.appendChild(lunbotu.firstElementChild);
            lunbotu.style.left = 0;
        })
    }
    let lunbot = setInterval(lunbomove, 2000);
    lunboda.onmouseover=function () {
        clearInterval(lunbot);
    }
    lunboda.onmouseout=function () {
        lunbot = setInterval(lunbomove, 2000);
    }
    luoboleft.onclick=function () {
        if (!lunboflag){
            return;
        }
        lunboflag=false;
        let lda = document.querySelector(".lunboda");
        let lunbowidth = lda.offsetWidth/4;
        lunbotu.insertBefore(lunbotu.lastElementChild,lunbotu.firstElementChild);
        lunbotu.style.left = -lunbowidth+'px';
        animate(lunbotu, {left:0}, 500, function () {
            lunboflag = true;
        })
    }
    luoboright.onclick=function () {
        if (!lunboflag){
            return;
        }
        lunboflag=false;
        lunbomove()
    }





    let gonggmain4 = document.querySelectorAll(".gongg-main4");
    let gonggbain = document.querySelectorAll(".gonggbain");
    let gongg = 0;

    function ggmove() {
        gongg++;
        if (gongg >= gonggbain.length) {
            gongg = 0;
        }
        gonggbain.forEach(function (m) {
            m.classList.remove("gonggbainte")
        })
        gonggbain[gongg].classList.add("gonggbainte")
    }

    setInterval(ggmove, 2000);
    gonggmain4[0].onclick = function () {
        gongg--;
        if (gongg < 0) {
            gongg = gonggbain.length - 1;
        }
        gonggbain.forEach(function (m) {
            m.classList.remove("gonggbainte")
        })
        gonggbain[gongg].classList.add("gonggbainte")
    }
    gonggmain4[1].onclick = function () {
        ggmove()
    }



    let catjs=document.querySelectorAll(".cat-main2");
    console.log(catjs.length)
    let catjs1=document.querySelectorAll(".catjs");
    let sanjiao=document.querySelectorAll(".sanjiao")
    console.log(catjs1.length)
    catjs.forEach(function (a,b) {
        a.onmouseover=function () {
            catjs.forEach(function (m,n) {
                m.classList.remove("cat-main2hover")
                catjs1[n].classList.remove("catjste")
                sanjiao[n].classList.remove("sanjiaote")
            })
            a.classList.add("cat-main2hover");
            catjs1[b].classList.add("catjste")
            sanjiao[b].classList.add("sanjiaote")
        }
        a.onmouseout=function () {
            catjs.forEach(function (m,n) {
                m.classList.remove("cat-main2hover")
                catjs1[n].classList.remove("catjste")
                sanjiao[n].classList.remove("sanjiaote")
            })
        }
    })
    
    
    let navcatzi=document.querySelectorAll(".nav-zuo-zi>li");
    let navcatzicat=document.querySelectorAll(".navcatxia>li");
    let navcat=document.querySelector(".navcat");
    navcatzi.forEach(function (a) {
        a.onclick=function () {
            navcat.style.display="block";
        }
    })
    navcatzicat.forEach(function (m,n) {
        m.onclick=function () {
            navcatzi.forEach(function (a) {
                a.classList.remove('navzixian')
            })
            navcat.style.display="none";
            navcatzi[n].classList.add("navzixian")

        }
    })

    let navcatxiu=document.querySelector(".nav-zuo-zi")
        document.body.onclick=function (e) {
            let way=e.target;
            if (way.parentNode!=navcatxiu){
                navcat.style.display="none";
            }
        }



    


}