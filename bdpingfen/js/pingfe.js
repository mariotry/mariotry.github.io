//需求:
//	1.鼠标浮到一颗星时,是灰色的   后面评价显示
//		鼠标浮到两颗星是灰色的	后面评价显示
//		鼠标浮到三颗星全部是红色的	后面评价显示
//		鼠标浮到四颗星全部是红色的	后面评价显示
//		鼠标浮到五颗星全部是红色的	后面评价显示
//		如果鼠标移出,那么提示显示,评价隐藏

window.onload=function(){
//	找到操作元素
	var xx=document.getElementsByClassName('xx');
	var tiShi=document.getElementById('tishi');
	var pinJia=document.getElementById('pinjia');
	var arr=['很差','较差','还行','推荐','力荐']
	
	
	
	for(var i=0;i<5;i++){
		xx[i].index=i;
		
		xx[i].onmouseover=function(){
			
			tiShi.style.display='none';
			pinJia.style.display='block';
			pinJia.innerHTML=arr[this.index];
			for(var i=0;i<=this.index;i++){
				if(this.index<=2){
				xx[i].style.background='url(img/3X.jpg)';
				
			}else{
				xx[i].style.background='url(img/1XX.jpg)';
			}
			}
		}
		
		xx[i].onclick=function(){
			n=this.index;
			
		}
		
		xx[i].onmouseout=function(){
			for(var i=0;i<arr.length;i++){
				tiShi.style.display='block';
				pinJia.style.display='none';
				xx[i].style.background='';
			}
			
			for(var i=0;i<=n;i++){
				xx[i].style.background='';
				if(n<=2){
					xx[i].style.background='url(img/3X.jpg)';
				}else{
					xx[i].style.background='url(img/1XX.jpg)';
				}
			}
			
		}
	}
	
	
	

}
