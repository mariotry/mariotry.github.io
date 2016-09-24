window.onload=function(){
	var btn=document.getElementById('btn');
	var box=document.getElementById('box');
	var divList=document.getElementsByTagName('div');
	var num=0;
	var num2=0;
	var onOff=-1;
	var str='';
	
//	当onOff=0时,显示第一个

	btn.onclick=function(){
		box.innerHTML='';
		onOff++;
		if(onOff>3){
			onOff=0;
		}
			for(var i=0;i<5;i++){
				
			if(onOff==0){
			if(i<=2){
				num=i*100;
				num2=i*100;
			}else{
				num=400-i*100;
				num2=i*100;
			}	
			
			
			box.innerHTML+='<div style="left:'+num+'px;top:'+num2+'px;"></div>';
			divList[i].innerHTML=i;
			}
			
		if(onOff==1){
			if(i<=2){
			num=i*100;
			num2=i*100;
		}else{
			num=i*100;
			num2=400-i*100;
		}
			box.innerHTML+='<div style="left:'+num+'px;top:'+num2+'px;"></div>';
			divList[i].innerHTML=i;
		}else
		
		if(onOff==2){
			if(i<=2){
			num=400-i*100;
			num2=i*100;
		}else{
			num=i*100;
			num2=i*100;
		}
			box.innerHTML+='<div style="left:'+num+'px;top:'+num2+'px;"></div>';
			divList[i].innerHTML=i;
		}
		
		if(onOff==3){
			if(i<=2){
			num=i*100;
			num2=400-i*100;
		}else{
			num=i*100;
			num2=i*100;
		}
			box.innerHTML+='<div style="left:'+num+'px;top:'+num2+'px;"></div>';
			divList[i].innerHTML=i;
			
			
		}
		
		
		
		}
			
	}

//	
}


//左:
//left:0         top:0
//	100		      100
//	200       	  200
//	100			  300
//	0			  400
//
//上:
//left:0		  top:0
//	100			100
//	200			200
//	300			100
//	400			0
//	
//右:
//left:400		  top:0
//	 300			100
//	 200			200
//	 300			300
//	 400			400
//	 
//下:
//left:0		  top:400
//	100			  300
//	200			  200
//	300			  300
//	400			  400
	
