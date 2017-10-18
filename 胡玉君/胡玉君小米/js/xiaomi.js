/**
 * Created by 胡玉君 on 2017/6/17.
 */
window.onload = function () {
    // 点击一下换到下一张
    function dainxia(a, b, ad, bd) {
        let i = 0;
        a.onmouseover = function () {
            a.classList.add(ad);
        };
        a.onmouseout = function () {
            a.classList.remove(ad);
        };
        a.onclick = function () {
            b.forEach(function (value) {
                value.classList.remove(bd);
            });
            i++;
            b[i].classList.add(bd);
            if (i == b.length - 1) {
                i = 0;
            }
        }
    }

    // let youguo = document.querySelector(".youguo");
    // let banna = document.querySelectorAll(".bannatu");
    // let bannaguohover = "bannaguohover";
    // let bannajs = "bannatujs";
    // dainxia(youguo, banna, bannaguohover, bannajs);

    let mingzkuo = document.querySelector("body>.ming>.mingkuo>.mingzkuo");
    let mingykuo = document.querySelector("body>.ming>.mingkuo>.mingykuo");
    let danda = document.querySelectorAll("body>.danda");
    let mingzkuohover = "mingzkuohover";
    let dandajs = "dandajs";
    dainxia(mingykuo, danda, mingzkuohover, dandajs);

    let mingzkuo1 = document.querySelector(".zhengwen>.ming>.mingkuo>.mingzkuo");
    let mingykuo1 = document.querySelector(".zhengwen>.ming>.mingkuo>.mingykuo");
    let danda1 = document.querySelectorAll(".zhengwen>.danda");
    dainxia(mingykuo1, danda1, mingzkuohover, dandajs);

    let halizuo = document.querySelector(".hali>.neirong-kuo-z");
    let haliyou = document.querySelector(".hali>.neirong-kuo-y");
    let halitu = document.querySelectorAll(".hali>.neirong-bottom");
    // console.log(halitu);
    let halikuote = "neirongkuo";
    let halitute = "neirong-bottomjs";
    dainxia(haliyou, halitu, halikuote, halitute);

    let dulazuo = document.querySelector(".dula>.neirong-kuo-z");
    let dulayou = document.querySelector(".dula>.neirong-kuo-y");
    let dulatu = document.querySelectorAll(".dula>.neirong-bottom");
    dainxia(dulayou, dulatu, halikuote, halitute);

    let youxizuo = document.querySelector(".youxi>.neirong-kuo-z");
    let youxiyou = document.querySelector(".youxi>.neirong-kuo-y");
    let youxitu = document.querySelectorAll(".youxi>.neirong-bottom");
    dainxia(youxiyou, youxitu, halikuote, halitute);

    let yingyongzuo = document.querySelector(".yingyong>.neirong-kuo-z");
    let yingyongyou = document.querySelector(".yingyong>.neirong-kuo-y");
    let yingyongtu = document.querySelectorAll(".yingyong>.neirong-bottom");
    dainxia(yingyongyou, yingyongtu, halikuote, halitute);


    // 点击一下换到上一张
    function dainshang(a, b, ad, bd) {
        let j = b.length - 1;
        a.onmouseover = function () {
            a.classList.add(ad);
        };
        a.onmouseout = function () {
            a.classList.remove(ad);
        };
        a.onclick = function () {
            b.forEach(function (value) {
                value.classList.remove(bd);
            });
            j--;
            b[j].classList.add(bd);
            if (j == 0) {
                j = b.length - 1;
            }
        }
    }

    // let zuoguo = document.querySelector(".zuoguo");
    // dainshang(zuoguo, banna, bannaguohover, bannajs);
    dainshang(mingzkuo, danda, mingzkuohover, dandajs);
    dainshang(mingzkuo1, danda1, mingzkuohover, dandajs);
    dainshang(halizuo, halitu, halikuote, halitute);
    dainshang(dulazuo, dulatu, halikuote, halitute);
    dainshang(youxizuo, youxitu, halikuote, halitute);
    dainshang(yingyongzuo, yingyongtu, halikuote, halitute);

    // 移入换页面
    function over(a, b, c, d) {
        a.forEach(function (m, n) {
            m.onmouseover = function () {
                a.forEach(function (m) {
                    m.classList.remove(c);
                });
                b.forEach(function (n) {
                    n.classList.remove(d);
                });
                m.classList.add(c);
                b[n].classList.add(d);
            }
        })
    }

    let jiandiana1 = document.querySelectorAll(".jiadianyou1>.jiare");
    let jiandianb1 = document.querySelectorAll(".jiadiantuyou1>.jiadiantuyou");
    let jiandianc1 = "jiarehover";
    let jiandiand1 = "jiadiantuyoujs";
    over(jiandiana1, jiandianb1, jiandianc1, jiandiand1);

    let jiandiana2 = document.querySelectorAll(".jiadianyou2>.jiare");
    let jiandianb2 = document.querySelectorAll(".jiadiantuyou2>.jiadiantuyou");
    over(jiandiana2, jiandianb2, jiandianc1, jiandiand1);

    function overte(a, b, c, d) {
        a.forEach(function (m, n1) {
            m.onmouseover = function () {
                a.forEach(function (m1) {
                    m1.classList.remove(c);
                });
                b.forEach(function (n) {
                    n.classList.remove(d);
                });
                m.classList.add(c);
                b[n1].classList.add(d);
            }
            m.onmouseout = function () {
                a.forEach(function (m) {
                    m.classList.remove(c);
                });
                b.forEach(function (n) {
                    n.classList.remove(d);
                });
            }
        })
    }

    let daohangzuo3 = document.querySelectorAll(".daohlzwb");
    let navjs = document.querySelectorAll(".navjs");
    let daohlzwbhover = "daohlzwbhover";
    let ulte = "ulte";
    overte(daohangzuo3, navjs, daohlzwbhover, ulte);


    let m = 0;

    function move() {
        let b = document.querySelectorAll(".lunbo");
        let d = "lunbohover";
        let a = document.querySelectorAll(".bannatu");
        let c = "bannatujs";
        m++;
        if (m >= b.length) {
            m = 0;
        }
        b.forEach(function (x) {
            x.classList.remove(d);
        })
        a.forEach(function (y) {
            y.classList.remove(c);
        })
        b[m].classList.add(d);
        a[m].classList.add(c);

    }

    let lunbo = document.querySelectorAll(".lunbo");
    let lunbohover = "lunbohover";
    let t = setInterval(move, 2000);
    let banna1 = document.querySelector(".banna");
    console.log(banna1)
    banna1.onmouseover = function () {
        clearInterval(t);
    }
    banna1.onmouseout = function () {
        t = setInterval(move, 2000);
    }

    let youguo = document.querySelector(".youguo");
    let zuoguo = document.querySelector(".zuoguo");
    let bannaguohover = "bannaguohover";
    let bannajs = "bannatujs";
    let flag = true;
    let bannatu = document.querySelectorAll(".bannatu");
    bannatu.forEach(function (a) {
        a.addEventListener("transitionend", function () {
            flag = true;
        })
    })

    youguo.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    };
    youguo.onmouseover = function () {
        youguo.classList.add(bannaguohover)
    }
    youguo.onmouseout = function () {
        youguo.classList.remove(bannaguohover)
    }
    zuoguo.onmouseover = function () {
        zuoguo.classList.add(bannaguohover)
    }
    zuoguo.onmouseout = function () {
        zuoguo.classList.remove(bannaguohover)
    }

    let b = document.querySelectorAll(".lunbo");
    let d = "lunbohover";
    let a = document.querySelectorAll(".bannatu");
    let c = "bannatujs";
    zuoguo.onclick = function () {
        if (flag) {
            flag=false;
            m--;
            if (m <= 0) {
                m = b.length - 1;
            }
            b.forEach(function (x) {
                x.classList.remove(d);
            })
            a.forEach(function (y) {
                y.classList.remove(c);
            })
            b[m].classList.add(d);
            a[m].classList.add(c);
        }
    }

    b.forEach(function (value, index) {
        value.onclick = function () {
            b.forEach(function (value) {
                value.classList.remove(d)
            })
            value.classList.add(d)
            a.forEach(function (value) {
                value.classList.remove(c)
            })
            a[index].classList.add(c)
            m = index;
        }
    })
    

    let ban=document.querySelectorAll(".bannazuochuda");
    let baz=document.querySelectorAll(".bannadaoz");
    baz.forEach(function (a,b) {
        a.onmouseover=function () {
            ban[b].classList.add("bannazuochudate");
        }
        a.onmouseout=function () {
            ban.forEach(function (m) {
                m.classList.remove("bannazuochudate")
            })
        }
    })
    

};

