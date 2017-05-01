var WINDOW_WIDTH= document.body.clientWidth;
var WINDOW_HEIGHT= document.body.clientHeight;
window.onload=function(){
	var canvas=document.getElementById("canvas");
	canvas.width=WINDOW_WIDTH;
	canvas.height=WINDOW_HEIGHT;
	//判断是否支持canvas
	if(canvas.getContext("2d")){
		var context=canvas.getContext("2d");
	}else{
		alert("天啦噜，您竟然看不到本宝宝");
	}
	//画矩形
	drawcube(context, 100,100,100,100,10,'#ccc','orange');
	drawcube(context, 200,100,100,100,10,'#ccc','blue');
	drawcube(context, 300,100,100,100,10,'#ccc','pink');
	drawcube(context, 100,200,100,100,10,'#ccc','green');
	drawcube(context, 200,200,100,100,10,'#ccc','red');
	drawcube(context, 300,200,100,100,10,'#ccc','yellow');
	drawcube(context, 100,300,100,100,10,'#ccc','rgba(150,70,150,1)');
	drawcube(context, 200,300,100,100,10,'#ccc','rgba(100,140,233,1)');
	drawcube(context, 300,300,100,100,10,'#ccc','rgba(233,70,100,1)');
	
	
	drawcube2(context, 500,300,50,50,10,'#ccc','rgb(233,70,100)');



	context.beginPath();
	context.moveTo(500,100);
	context.lineTo(700,100);
	context.lineTo(700,60);
	context.lineTo(800,150);
	context.lineTo(700,240);
	context.lineTo(700,200);
	context.lineTo(500,200);
	context.closePath();
	context.fillStyle="pink";
	context.fill();
	context.lineWidth=10;
	context.strokeStyle="#ccc";
	context.stroke();
}
function drawcube(cxt, x,y,w,h,borderwidth,bordercolor,fillcolor){
	cxt.beginPath();
	/*cxt.moveTo(x,y);
	cxt.lineTo(x+w,y);
	cxt.lineTo(x+w,y+h);
	cxt.lineTo(x,y+h);*/
	cxt.rect(x,y,w,h);
	cxt.closePath();
	cxt.fillStyle=fillcolor;
	cxt.fill();
	cxt.lineWidth=borderwidth;
	cxt.strokeStyle=bordercolor;
	cxt.stroke();
}
function drawcube2(cxt, x,y,w,h,borderwidth,bordercolor,fillcolor){
	cxt.fillStyle=fillcolor;
	cxt.lineWidth=borderwidth;
	cxt.strokeStyle=bordercolor;
	cxt.fillRect(x,y,w,h);
	cxt.strokeRect(x,y,w,h);
}
