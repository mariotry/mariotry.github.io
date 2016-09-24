window.onload=function(){

	var ul=document.getElementsByTagName('ul')[0];
	var liList=ul.getElementsByTagName('li');

	
	
	for(var i=0;i<liList.length;i++){
		
		count(i);
	}
	
	
	
	function count(a){
		
		var spans=liList[a].getElementsByClassName('num')[0];
		var ems=liList[a].getElementsByTagName('em')[0];
		var is=liList[a].getElementsByTagName('i')[0];
		var btn=liList[a].getElementsByTagName('input');
		var num=0;
		spans.innerHTML=num;
		btn[0].onclick=function(){
		num--;
		if(num<0){
			num=0;
		}
		spans.innerHTML=num;
		is.innerHTML=num*ems.innerHTML;
		amount()
	}
	
	btn[1].onclick=function(){
		num++;
		
		spans.innerHTML=num;
		is.innerHTML=num*ems.innerHTML;
		amount()
	}
	}
	
	var allSpan=ul.getElementsByTagName('span');
	var allem=document.getElementsByTagName('em');
	var alli=document.getElementsByTagName('i');
	var piece=document.getElementById('piece');
	var allPrice=document.getElementById('all-price');
	var max=document.getElementById('max');
	var m=0;
	var n=0;
	var maxNum=0;
	
	function amount(){
		m=0;
		n=0;
		for(var i=0;i<allSpan.length;i++){
		m+=parseInt(allSpan[i].innerHTML) ;
		n+=parseFloat(alli[i].innerHTML )
	}
		piece.innerHTML=m;
		allPrice.innerHTML=n;
		
		for(var i=0;i<allSpan.length;i++){
			if(allSpan[i].innerHTML!=0){
				if(parseFloat(allem[i].innerHTML) >maxNum){
					maxNum=allem[i].innerHTML
					max.innerHTML=maxNum;
				}
			}
		}
		
	}
	
}
//0 1 3 6 10