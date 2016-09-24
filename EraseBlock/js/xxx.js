window.onload=function(){
	var content=document.getElementById('content');
	var num=0;
	var box=document.getElementsByClassName('box');
	var box2=document.getElementsByClassName('box2');
	var className="box";
	var backgroundPosition="";
	for(var i=0;i<100;i++){
		if(i%10==0){
			num++;
		}
		
		content.innerHTML+='<div class="'+className+'" style="left:'+(i%10)*60+'px;top:'+(num-1)*60+'px;background-position:-'+(i%10)*50+'px -'+(num-1)*50+'px">'+i+'</div>';
		
	}
	for(var i=0;i<100;i++){
	box[i].onmouseover=function(){
//			
		this.style.color='rgba(0,0,0,0)';
		
		this.className='box2';
	}
	}
	
}	
	


	
