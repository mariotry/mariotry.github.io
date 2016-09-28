window.onload=function(){
	var leftB = document.getElementById('leftB');
	var rightB = document.getElementById('rightB');
	var move = document.getElementById('long');
	var lis = move.getElementsByTagName('li');
	var bannerPic = document.getElementsByClassName('banner-pic')[0];
	var n=0;
	var goclick = document.getElementsByClassName('goclick');
	var timer=null;
	goclick[n].style.background="darkorange";
	rightB.onclick=aotuplay
	leftB.onclick=function(){
		n--;
		if(n<0){
			n=lis.length-1;
		}
		MM();
	}
	function fn(){
		move.style.left='-'+n*520+'px';
		for(var i=0;i<goclick.length;i++){
			goclick[i].style.background='';
		}
		goclick[n].style.background="darkorange";
	}
	for(var i=0;i<goclick.length;i++){
		goclick[i].index=i;
		goclick[i].onclick=function(){
			n=this.index;
			MM();
		}
	}
	function aotuplay(){
		n++;
		if(n>lis.length-1){
			n=0;
		}
		MM();
	}
	timer=setInterval(function(){
		aotuplay();
	},2000)
	bannerPic.onmouseover=function(){
		clearInterval(timer);
	}
	bannerPic.onmouseout=function(){
		timer=setInterval(function(){
			aotuplay();
		},2000)
	}
	function MM(){
		for(var i=0;i<goclick.length;i++){
			goclick[i].style.background='';
		}
		goclick[n].style.background="darkorange";
		mtween(move,'left','-'+n*520,1000,'linear');	
	}
	
}
