window.onload=function(){
	var btn=document.getElementsByTagName('input');
	var divList=document.getElementsByTagName('div');
	
	
	
	for(i=0;i<btn.length;i++){
		btn[i].off=i;
		btn[i].onclick=function(){
					
			for(i=0;i<btn.length;i++){
				btn[i].style.background="";
				divList[i].style.display='';
			}
			this.style.background='green';
			divList[this.off].style.display='block';
		}
		 
		
			
	}
}
