/**
 * Created by 胡玉君 on 2017/6/22.
 */
window,onload=function () {
    let wenben=document.querySelectorAll(".wenben");
    console.log(wenben)
    let xuan=document.querySelectorAll(".xuan");
    for (let i=1;i<wenben.length;i++){
        wenben[i].onmouseover=function () {
            xuan[i-1].classList.add("xuante");
        }
    }
    for (let j=1;j<wenben.length;j++){
        wenben[j].onmouseout=function (){
            xuan.forEach(function (a) {
                a.classList.remove("xuante");
            })
        }
    }

    let banna=document.querySelector(".bannar")
    let banna1=document.querySelector(".bannartu")
    let img=document.querySelectorAll(".bannartu>img");
    let imgzuo=document.querySelector('.zguo');
    let imgyou=document.querySelector('.yguo');
    let lunbo=document.querySelectorAll(".lunbo");
    let index=0;
    function move() {
        index++;
        if (index>=img.length){
            index=0;
        }
        img.forEach(function (a,b) {
            a.classList.remove("imgte");
            lunbo[b].classList.remove("lunbote");
        })
        img[index].classList.add("imgte");
        lunbo[index].classList.add("lunbote");
    }
    let t=setInterval(move,2000);
    banna1.onmouseover=function () {
        clearInterval(t);
    }
    banna1.onmouseout=function () {
        t=setInterval(move,2000);
    }
    imgyou.onclick=function () {
        move();
    }
    imgzuo.onclick=function () {
        index--;
        if (index<0){
            index=img.length-1;
        }
        img.forEach(function (a,b) {
            a.classList.remove("imgte");
            lunbo[b].classList.remove("lunbote");
        })
        img[index].classList.add("imgte");
        lunbo[index].classList.add("lunbote");
    }
    lunbo.forEach(function (m,n) {
        m.onclick=function () {
            lunbo.forEach(function (x,y) {
                x.classList.remove("lunbote")
                img[y].classList.remove("imgte");
            })
            m.classList.add("lunbote");
            img[n].classList.add("imgte");
            index=n;
        }
    })

    let back=document.querySelector(".guanggao");
    back.onclick=function () {
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    }

}