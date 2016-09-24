window.onload=function(){
	
//	找到操作元素
	var list=document.getElementsByClassName('list');
	var allCheck=document.getElementById('allcheck');
	var bottom=document.getElementById('bottom');
	var check=document.getElementsByClassName('check');
	var btn=bottom.getElementsByTagName('div');
	var btnText=document.getElementsByClassName('btn-text');
	var num=0;
	var onOff=true;
	for(var i=0;i<check.length;i++){
		check[i].index=i;
		check[i].onOff=true;
		check[i].onclick=function(){
			if(this.onOff){
				list[this.index].style.background='green';
				this.onOff=false;
				num++;
				for(var i=0;i<btn.length;i++){
					btn[i].style.border='1px solid black';
					btnText[i].style.color='black';
				}
			}else{
				list[this.index].style.background='';
				this.onOff=true;
				num--;
				if(num==0){
					for(var i=0;i<btn.length;i++){
						btn[i].style.border='1px solid #CECECE';
						btnText[i].style.color='#CECECE';
					}
				}
			}
			if(num==check.length){
				allCheck.checked='checked';
				onOff=false;
			}else{
				allCheck.checked='';
				onOff=true;
			}
		}
	}
	allcheck.onclick=function(){
		if(onOff){
			isAllchecked('checked','checked','green',false,check.length,'black',false)
		}else{
			isAllchecked('','','',true,0,'#CECECE',true);
		}
	}
	function isAllchecked(state,state2,color,state3,n,color2,state4){
		this.checked=state;
			for(var i=0;i<check.length;i++){
				check[i].checked=state2;
				list[i].style.background=color;
				check[i].onOff=state3;
				num=n;
			}
			for(var i=0;i<btn.length;i++){
				btn[i].style.border='1px solid '+color2+'';
				btnText[i].style.color=color2;
			}
			onOff=state4;
	}
}
