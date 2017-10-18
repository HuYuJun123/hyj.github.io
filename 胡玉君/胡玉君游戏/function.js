/**
 * Created by 胡玉君 on 2017/6/21.
 */
    function $(a, b = false) {
        if (typeof a == "string") {
            if (b) {
                return document.querySelectorAll(a);
            } else {
                return document.querySelector(a);
            }
        }else if (typeof a=="function"){
            window.onload=function () {
                a();
            }
        }
    }


   

