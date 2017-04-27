window.onload=function() {
	var list=document.getElementById("list");
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	function animate(offset){
		newleft=parseInt(list.style.left)+offset;
		list.style.left=newleft+"px";
		if(newleft>0){
		list.style.left =-3840+"px";
		}
		if(newleft<-3840){
			list.style.left =0+"px";
		}
	}
	prev.onclick=function(){
		animate(1920);
	}
	next.onclick=function(){
		animate(-1920);
	}


var timer;
function play() {
    timer = setInterval(function () {
        next.onclick()
    }, 4000)
}
play();
var container = document.getElementById('div2');

	function stop() {
	    clearInterval(timer);
	}
	container.onmouseover = stop;
	container.onmouseout = play;

var container = document.getElementById('div2');
var buttons = document.getElementById('cutspan').getElementsByTagName('span');

var index = 1;

function buttonsShow() {
    //这里需要清除之前的样式
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].className == 'on') {
            buttons[i].className = '';
        }
    }
    //数组从0开始，故index需要-1
    buttons[index - 1].className = 'on';
}

prev.onclick = function() {
    index -= 1;
    if (index < 1) {
        index = 3;
    }
    buttonsShow();
    animate(1920);
}
next.onclick = function() {
    //由于上边定时器的作用，index会一直递增下去，我们只有3个小圆点，所以需要做出判断
    index += 1;
    if (index > 3) {
        index = 1;
    }
    buttonsShow();
    animate(-1920);
}

}
