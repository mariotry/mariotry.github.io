window.onload=function(){
	
	var box=document.getElementById('box');
	var pic=document.getElementById('pic');
	var list=pic.getElementsByClassName('list');
	var width = parseFloat(getComputedStyle(list[0]).width);
	var btn1=document.getElementById('btn1');
	var btn2=document.getElementById('btn2');
	var dotgroup=document.getElementById('dotgroup');
	var spans=dotgroup.getElementsByTagName('span');
	var num=0;
	var timer=null;
	var timer2=null;
	var textBox=document.getElementById('bg');
	var title=document.getElementById('title');
	var content=document.getElementById('content');
	var textArr=[
			{title:'图一的标题',
			content:'图一的内容'
			},
			{title:'图二的标题',
			content:'图二的内容'
			},
			{title:'图三的标题',
			content:'图三的内容'
			},
			{title:'图四的标题',
			content:'图四的内容'
			}
		]
	pic.style.width=width*list.length+'px';

//	下一个按钮添加点击事件
	btn2.onclick=autoPlay;
		
		
	
	//	上一个按钮添加点击事件
	btn1.onclick=function(){
		num--;
		if(num<0){
			num=list.length-1;
		}
		move();
	}
	
//	小点点添加点击事件

	for(var i=0;i<spans.length;i++){
		spans[i].index=i;
//		num=this.index;
		spans[i].onclick=function(){
			num=this.index;
			move();
		}
	}
	
//	添加自动播发

	function autoPlay(){
		num++;
		if(num>3){
			num=0;
		}
	
		move();
	}
	
	timer2=setInterval(function(){
		autoPlay();
	},2000);
	
	box.onmouseover=function(){
		clearInterval(timer2);
	}
	
	box.onmouseout=function(){
		timer2=setInterval(function(){
		autoPlay();
		},3000);
	}
	
	function move(){
//		clearInterval(timer);
		
		for(var i=0;i<spans.length;i++){
				spans[i].className='';
			}
			spans[num].className='active';
//			pic.style.left='-'+num*width+'px';

			//	公式 :起始位置  + (匀速度 = 总距离 / 花费总时间) * 时间差(运行时间)

			//起始位置
			mtween(textBox,'opacity',0,500,'linear',function(){
				mtween(pic,'left','-'+num*width,1000,'linear',function(){
					title.innerHTML=textArr[num].title;
					content.innerHTML=textArr[num].content;
					mtween(textBox,'opacity',1,500,'linear');
				});
			})
//			mtween(textBox, 'top', -40, 500, 'easeOut', function() {
//					mtween(pic, 'left', '-' + num * width, 1000, 'easeOut',function() {
//						title.innerHTML = textArr[num].title;
//							content.innerHTML = textArr[num].content;
//						mtween(textBox, 'top', 0, 500, 'easeOut');
//					});
//				});
			
	}
	


}
