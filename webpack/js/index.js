
var boxnode=document.getElementById("box")

boxnode.onmousedown=function(e){
	var disx=e.clientX-boxnode.offsetLeft;
	var disy=e.clientY-boxnode.offsetTop;
	
	document.onmousemove=function(e){
		boxnode.offsetLeft=e.clientX-disx;
		boxnode.offsetTop=e.clientY-disy;
	}
	document.onmouseup=function(){
		onmousemove=null
		onmouseup=null
	}
}
