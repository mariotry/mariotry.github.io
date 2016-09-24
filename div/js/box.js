
window.onload=function(){
	var changeBox=document.getElementById('change-box');
	var number=document.getElementById('number');
	var liList=number.getElementsByTagName('li')[0];

	
	
	function byId(id){
		return document.getElementById(id);
	}
	byId('box').onclick=function(){
		byId('setting').style.display='block';
	}
	byId('red').onclick=function(){
		getStyle(changeBox, 'backgroundColor', 'red')
	}
	byId('yellow').onclick=function(){
		getStyle(changeBox, 'backgroundColor', 'yellow')
	}
	byId('blue').onclick=function(){
		getStyle(changeBox, 'backgroundColor', 'blue')
	}
	byId('width1').onclick=function(){
		getStyle(changeBox, 'width', '200px')
	}
	byId('width2').onclick=function(){
		getStyle(changeBox, 'width', '300px')
	}
	byId('width3').onclick=function(){
		getStyle(changeBox, 'width', '400px')
	}
	byId('height1').onclick=function(){
		getStyle(changeBox, 'height', '200px')
	}
	byId('height2').onclick=function(){
		getStyle(changeBox, 'height', '300px')
	}
	byId('height3').onclick=function(){
		getStyle(changeBox, 'height', '400px')
	}
	byId('confirm').onclick=function(){
		byId('setting').style.display='none';
	}
	byId('recover').onclick=function(){
		byId('change-box').style.width='120px';
		byId('change-box').style.height='120px';
		byId('change-box').style.backgroundColor='';
	}
	function getStyle(){
		if(arguments.length ==2){
			if(arguments.currentStyle){
				return arguments[0].currentStyle [arguments[1]]
			}else{
				return getComputedStyle(arguments[0])[arguments[1]];
			}
		}
		
		if(arguments.length==3){
			return arguments[0].style[arguments[1]] = arguments[2];
		}
	}
	
}


































//window.onload=function(){
//	var setBtn=document.getElementById("box");
//	var setBox=document.getElementById("setting");
//	var red=document.getElementById("red");
//	var changeBox=document.getElementById("change-box");
//	var yellow=document.getElementById("yellow");
//	var blue=document.getElementById("blue");
//	var width1=document.getElementById("width1");
//	var width2=document.getElementById("width2");
//	var width3=document.getElementById("width3");
//	var height1=document.getElementById("height1");
//	var height2=document.getElementById("height2");
//	var height3=document.getElementById("height3");
//	var recover=document.getElementById("recover");
//	var confirm=document.getElementById("confirm");
//		
//		setBtn.onclick=function(){
//		setBox.style.display="block";
//	
//	}
//	red.onclick=function(){
//		changeBox.style.background="red";
//	}
//	yellow.onclick=function(){
//		changeBox.style.background="yellow";
//	}
//	blue.onclick=function(){
//		changeBox.style.background="blue";
//	}
//	width1.onclick=function(){
//		changeBox.style.width="200px";
//	}
//	width2.onclick=function(){
//		changeBox.style.width="300px";
//	}
//	width3.onclick=function(){
//		changeBox.style.width="400px";
//	}
//	height1.onclick=function(){
//		changeBox.style.height="200px";
//	}
//	height2.onclick=function(){
//		changeBox.style.height="300px";
//	}
//	height3.onclick=function(){
//		changeBox.style.height="400px";
//	}
//	recover.onclick=function(){
//		changeBox.style.width="120px";
//		changeBox.style.height="120px";
//		changeBox.style.border="3px solid black";
//		changeBox.style.background="white";
//	}
//	confirm.onclick=function(){
//		setBox.style.display="none";
//	}
//}
