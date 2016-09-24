window.onload=function(){
	var text=document.getElementById("text");
	var btn=document.getElementById("btn");
	var box=document.getElementById("box");
	
	btn.onclick=function(){
		box.innerHTML=box.innerHTML+text.value+"<br />";
		text.value="";
		
	}
	
}
