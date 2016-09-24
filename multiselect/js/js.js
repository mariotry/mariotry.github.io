window.onload=function(){
//	找到元素
	var divList=document.getElementsByTagName('div');
	//var onOff=true;
	for(i=0;i<divList.length;i++){
		divList[i].onOff=true;
		divList[i].onclick=function(){
				
			if(this.onOff){
				this.style.backgroundColor='yellow';
				this.onOff=false;
			}else {
				this.style.backgroundColor='';
				this.onOff=true;
			}
					
		}
	}
//点击其中一个后，再点击另外两个，三个div的颜色都变色，如果再点击其中的一个，颜色回到最初；	

}
//如果点击一次就变成黄色  再点击一次就变成白色；



