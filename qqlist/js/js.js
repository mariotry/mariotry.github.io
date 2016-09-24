//需求：
//随意点击任意一个变换
//1、点击我的好友，颜色变为黄色；
//2、箭头旋转90度；
//3、li下的div显示出来；

window.onload=function(){
//	找到需要操作的元素

	var title=document.getElementsByTagName('h3');
	var pic=document.getElementsByClassName('pic');
	var nameBox=document.getElementsByClassName('name-box');
	var name=document.getElementsByClassName('name');
//	var onOff=true;
//	给三个按钮添加点击事件
	for(var i=0;i<title.length;i++){
//		为每个按钮添加自定义属性，记录下每个按钮各自的布尔值；从而通过各自的布尔值实现点击效果；
		title[i].onOff=false;
		title[i].num=i;
		title[i].onclick=function(){
			if(this.onOff){
				this.style.background='chartreuse';
				pic[this.num].style.transform='rotate(0deg)';
				nameBox[this.num].style.display='none';
				this.onOff=false;
			}else {
				this.style.background='yellow';
				pic[this.num].style.transform='rotate(90deg)';
				nameBox[this.num].style.display='block';
				
				this.onOff=true;
			}
			
		}
		}
//		这个if是同时适应两个需求的
//		1、第一次点击title[0]时，title[0]变黄色。。。下面的块显示
//		   第二次次点击title[0]时，title[0]变成初始颜色，块隐藏
//		2、第一次点击title[0]时，title[0]变黄色。。。下面块显示
//		   第二次点击title[1]时，title[1]变黄色。。下面块显示；
		for(var i=0;i<name.length;i++){
			
			name[i].onclick=function(){
				for(var i=0;i<name.length;i++){
					name[i].style.background="";
				}
			this.style.background="pink";
		}
		}
		
	
}
