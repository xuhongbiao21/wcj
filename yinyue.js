/**
 * Created by TCKJ on 2017/6/25.
 */
window.onload=function () {
    var yinyue=document.getElementById('yinyue');
    var tangren=document.getElementById('tangren');
    var yytp=document.getElementById('yytp');


    yytp.onclick = function () {
        if (tangren.paused) {//暂停
            tangren.play();//开始
            yytp.style.animationPlayState = 'running';

        } else {
            tangren.pause();//暂停
            yytp.style.animationPlayState = 'paused';
        }
    }
}