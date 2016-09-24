//1、点击图标可以来回切换；
window.onload=function(){
	var pic=document.getElementById("pic");
	var text=document.getElementById("text");
	var send=document.getElementById("send");
	var isImg=false;
	var topKuang=document.getElementById("top-kuang");
	var className="";
	var picSrc="";
	
	pic.onclick=function(){
		
		if(isImg){
			pic.src="img1/1.png";
			isImg=false;
		}else{
			pic.src="img1/2.png";
			isImg=true;
		}

	}
	
//	点击发送按钮，将图标和内容发送到内容框，并且两个图标和各自的文字左右分开
	send.onclick=function(){
		
		if(isImg){
			picSrc="2";
			className="fr";
			isImg=true;
		}else{
			picSrc="1";
			className="fl";
			isImg=false;
		}
		
		topKuang.innerHTML=topKuang.innerHTML+'<div class="'+className+'"><img src="img1/'+picSrc+'.png"><p>'+text.value+'</p></div>'
		
	}
}
