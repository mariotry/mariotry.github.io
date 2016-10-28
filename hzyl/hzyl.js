window.onload=function(){
	var warp=document.getElementById('wrap');
	var wall = document.getElementsByClassName('wall');
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var documentWidth = document.documentElement.clientWidth;
	var num=0;
	var n=0;
	wall[2].style.cssText='transform:translateZ(-'+documentWidth+'px) rotateY(180deg);'
	wrap.style.transformOrigin='center center '+(-window.innerWidth)/2.1+'px';
	right.onclick=function(){
		
		num+=90;
		console.log(num);
		wrap.style.transform='rotateY('+num+'deg)';
		n=num;
	}
	left.onclick=function(){
		num-=90;
		wrap.style.transform='rotateY('+num+'deg)';
		n=num;
	}
	
	var timer=setInterval(function(){
		n+=90;
		wrap.style.transform='rotateY('+n+'deg)';
		num=n;
	},4000)
	warp.onmouseover=function(){
		clearInterval(timer);
	}
	warp.onmouseout=function(){
		timer=setInterval(function(){
			n+=90;
			wrap.style.transform='rotateY('+n+'deg)';
			num=n;
		},3000)
	}
}