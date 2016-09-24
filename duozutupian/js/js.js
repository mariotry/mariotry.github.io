window.onload=function(){
//	找到需要操作的元素
	var img1=document.getElementById('img1');
	var img2=document.getElementById('img2');
	var btn=document.getElementsByTagName('input');
	var text1=document.getElementById('text1')
	var text2=document.getElementById('text2')
	var page1=document.getElementById('page1');
	var page2=document.getElementById('page2');
	var num=0;
	var num2=0;
	var onOff=true;
//	数组
	var picSrc1=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
	var picSrc2=['img/5.jpg','img/6.jpg','img/7.jpg'];
//	图片初始化
	
	function picture1(){
	img1.src=picSrc1[num];
	text1.innerHTML='第一组第'+(num+1)+'张';
	page1.innerHTML=''+(num+1)+'/'+picSrc1.length+'';
	}
	function picture2(){
	img2.src=picSrc2[num2];
	text2.innerHTML='第二组第'+(num2+1)+'张';
	page2.innerHTML=''+(num2+1)+'/'+picSrc2.length+'';	
	}
	picture1();
	picture2();
	
//	为按钮上一组添加点击事件，图片会跟着轮播转换
	btn[0].onclick=function(){
		num--;
		num2--;
		if(num<0){
			num=picSrc1.length-1;
			
		}
		if(num2<0){
			num2=picSrc2.length-1;
		}
		picture1();
		picture2();
		onOff=true;
		console.log(onOff);
	}
	//	为按钮下一组添加点击事件，图片会跟着轮播转换
	btn[1].onclick=function(){
		num++;
		num2++;
		if(num>picSrc1.length-1){
			num=0;
			
		}
		if(num2>picSrc2.length-1){
			num2=0;
		}
		picture1();
		picture2();
		onOff=false;
		console.log(onOff);
	}
	
//	为图片添加点击事件
	
		img1.onclick=function(){
		if(onOff){
			num--;
		if(num<0){
			num=picSrc1.length-1;
		}
		
		picture1();
		}else{
			num++;
		if(num>picSrc1.length-1){
			num=0;
		}
		picture1();
		}
		
		
	}
//		另一张图片
		img2.onclick=function(){
		if(onOff){
			num2--;
		if(num2<0){
			num2=picSrc2.length-1;
		}
		
		picture2();
		}else{
			num2++;
		if(num2>picSrc2.length-1){
			num2=0;
		}
		
		picture2();
		}
		
//		
	}

		
//	
}
