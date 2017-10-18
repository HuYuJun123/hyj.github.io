/**
 * Created by 胡玉君 on 2017/6/19.
 */
window.onload = function () {
    let bannatu = document.querySelectorAll(".bannazhtu>img");
    let bannatuda = document.querySelector(".bannazhtu");
    let lunbo = document.querySelectorAll(".banner-zh>ul>li");
    let bannazh = document.querySelector(".banner-zh");
    let width = parseInt(getComputedStyle(bannazh, null).width);
    let index = 0;

    function move() {
        index++;
        if (index >= bannatu.length) {
            index = 0;
        }
        lunbo.forEach(function (a) {
            a.classList.remove("bannaluobo");
        })
        animate(bannatuda, {left: -index * width}, 200, Tween.Linear, function () {
            flag = true
        });
        lunbo[index].classList.add("bannaluobo");
    }

    let t = setInterval(move, 2000);
    bannazh.onmouseover = function () {
        clearInterval(t);
    };
    bannazh.onmouseout = function () {
        t = setInterval(move, 2000);
    }
    let flag = true;
    bannatu.forEach(function (a) {
        a.addEventListener("transitionend", function () {
            flag = true;
        })
    })
    let you = document.querySelector(".banner-zh-you");
    you.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    }
    let zuo = document.querySelector(".banner-zh-zuo");
    zuo.onclick = function () {
        if (flag) {
            flag = false;
            index--;
            if (index < 0) {
                index = bannatu.length - 1;
            }
            console.log(index)
            lunbo.forEach(function (a) {
                a.classList.remove("bannaluobo");
            })
            animate(bannatuda, {left: -index * width}, 200, Tween.Linear, function () {
                flag = true
            });
            lunbo[index].classList.add("bannaluobo");

        }
    }
    lunbo.forEach(function (a, b) {
        a.onclick = function () {
            lunbo.forEach(function (m) {
                m.classList.remove("bannaluobo")
            })
            a.classList.add("bannaluobo");
            bannatuda.style.left = `-${b * width}px`;
            index = b;
        }
    })


    let lunbosi = document.querySelector(".lunbotu");
    let index1 = 0;

    function move1() {
        index1++;
        if (index1 >= 5) {
            index1 = 0
        }
        animate(lunbosi, {left: -index1 * 290}, 200, Tween.Linear, function () {
            flag1 = true
        })
    }

    let t1 = setInterval(move1, 1500);
    let lunbotuda = document.querySelector(".lunbotuda")
    lunbotuda.onmouseover = function () {
        clearInterval(t1);
    }
    lunbotuda.onmouseout = function () {
        t1 = setInterval(move1, 1500);
    }
    let lunbokh = document.querySelectorAll(".lunbo-kh");
    let flag1 = true;
    lunbokh[0].onclick = function () {
        if (flag1) {
            flag1 = false;
            index1--;
            if (index1 < 0) {
                index1 = 5
            }
            animate(lunbosi, {left: -index1 * 290})
        }
    };
    lunbokh[1].onclick = function () {
        if (flag1) {
            flag1 = false;
            move1()
        }
    }

    
    let gonggmain4=document.querySelectorAll(".gongg-main4");
    let gonggbain=document.querySelectorAll(".gonggbain");
    let gongg=0;
    function ggmove() {
        gongg++;
        if (gongg>=gonggbain.length){
            gongg=0;
        }
        gonggbain.forEach(function (m) {
            m.classList.remove("gonggbainte")
        })
        gonggbain[gongg].classList.add("gonggbainte")
    }
        setInterval(ggmove,4000);
    gonggmain4[0].onclick=function () {
        gongg--;
        if (gongg<0){
            gongg=gonggbain.length-1;
        }
        gonggbain.forEach(function (m) {
            m.classList.remove("gonggbainte")
        })
        gonggbain[gongg].classList.add("gonggbainte")
    }
    gonggmain4[1].onclick=function () {
        ggmove()
    }

};