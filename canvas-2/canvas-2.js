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
	//画直线
	context.beginPath();
	context.moveTo(500,300);
	context.lineTo(700,300);
	context.lineCap="butt";
	context.lineWidth=40;
	context.stroke();
	
	context.beginPath();
	context.moveTo(500,350);
	context.lineTo(700,350);
	context.lineCap="round";
	context.lineWidth=40;
	context.stroke();

	context.beginPath();
	context.moveTo(500,400);
	context.lineTo(700,400);
	context.lineCap="square";
	context.lineWidth=40;
	context.stroke();

	
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
	
	
	//drawcube2(context, 500,300,50,50,10,'#ccc','rgb(233,70,100)');
    //画星星
	drawstar(context, 800,300,100,50,10,'#ccc','rgb(233,70,100)',30);
	drawstar(context, 900,180,80,40,10,'#ccc','rgb(100,233,100)',60);
	drawstar(context, 920,380,80,40,10,'#ccc','rgb(100,100,250)',90);
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

//画矩形
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
//画矩形
function drawcube2(cxt, x,y,w,h,borderwidth,bordercolor,fillcolor){
	cxt.fillStyle=fillcolor;
	cxt.lineWidth=borderwidth;
	cxt.strokeStyle=bordercolor;
	cxt.fillRect(x,y,w,h);
	cxt.strokeRect(x,y,w,h);
}


//画五角星
function drawstar(cxt, x,y,R,r,borderwidth,bordercolor,fillcolor,deg){
	cxt.beginPath();
	for(var i=0;i<5;i++){
	    cxt.lineTo(Math.cos((deg+18+i*72)/180 * Math.PI)*R+x, -Math.sin((deg+18+i*72) / 180*Math.PI)*R+y);
		cxt.lineTo(Math.cos((deg+54+i*72)/180 * Math.PI)*r+x, -Math.sin((deg+54+i*72) / 180*Math.PI)*r+y);
	}
	cxt.closePath();
	cxt.fillStyle=fillcolor;
	cxt.fill();
	cxt.lineWidth=borderwidth;
	//cxt.lineJoin="bevel";
    cxt.lineJoin="round";
	cxt.strokeStyle=bordercolor;
	cxt.stroke();
}
