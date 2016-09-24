window.onload=function(){
	var btn1=document.getElementById('btn1');
	var btn2=document.getElementById('btn2');
	var leftBtn=document.getElementById('left-btn');
	var rightBtn=document.getElementById('right-btn');
	var pic=document.getElementById('pic');
	var black=document.getElementById('black');
	var picSrc=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg'];
	var num=0;
	var onOff=true;
//	图片初始化
	renderpic();
	function renderpic(){
		pic.src=picSrc[num];
		
		black.innerHTML=''+(num+1)+'/'+picSrc.length;
	}
	
//	点击右边按钮出现循环和顺序播放效果
	
	
	rightBtn.onclick=function(){
		num++;
		if(onOff){
			if(num>picSrc.length-1){
			alert('最后一张啦');
			num=picSrc.length-1;
		}
		}else{
			if(num>picSrc.length-1){
				num=0;
			}
		}
		renderpic();

	}
	leftBtn.onclick=function(){
		num--;
		if(onOff){
			if(num<0){
			alert('这是第一张啦');
			num=0;
		}
		}else{
			if(num<0){
				num=picSrc.length-1;
			}
		}
		renderpic();
	}
	
	btn2.onclick=function(){
		onOff=true;
	}
	btn1.onclick=function(){
		onOff=false;
	}
}
