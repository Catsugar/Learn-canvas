var WINDOW_WIDTH= document.body.clientWidth;
var WINDOW_HEIGHT= document.body.clientHeight;
var inColor="#ff6";
var outColor="#ff9";
var stars=[];
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
	//背景
	context.fillStyle="#000";
	context.fillRect=(0,0,canvas.width,canvas.height);
    //画星星
	for(var i=0;i<200;i++){
		var star={
            r:Math.random()*10+8,
            x:Math.random()*canvas.width,
		    y:Math.random()*canvas.height,
		    a:Math.random()*360,
			vx:Math.random()*6-3,
			vy:Math.random()*6-3,
			ax:Math.random()*2-1,
			ay:Math.random()*2-1
		};
		stars.push(star);
		drawstar(context, star.x,star.y,star.r,star.r/2.0,3,inColor,outColor,star.a);
	}
	//更新
	var timer=setInterval(function(){
		context.clearRect(0,0,canvas.width,canvas.height);
		update(context);
	},50);
}
function update(context){
  for(var i=0;i<stars.length;i++){
    stars[i].x+=stars[i].vx;
    stars[i].y+=stars[i].vy;
	stars[i].vy+=stars[i].ay;
	stars[i].vx+=stars[i].ax;
	//去掉的画星星就飞光啦
	if(stars[i].x>=canvas.width){
		stars[i].x=canvas.width;
		stars[i].vx=-stars[i].vx;
	}
	if(stars[i].x<=0){
		stars[i].x=0;
		stars[i].vx=-stars[i].vx;
	}
	if(stars[i].y>=canvas.height){
		stars[i].y=canvas.height;
		stars[i].vy=-stars[i].vy;
	}
	if(stars[i].y<=0){
		stars[i].y=0;
		stars[i].vy=-stars[i].vy;
	}
	drawstar(context, stars[i].x,stars[i].y,stars[i].r,stars[i].r/2.0,3,inColor,outColor,stars[i].a);
  }
}

//画五角星的函数
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
    cxt.lineJoin="round";
	cxt.strokeStyle=bordercolor;
	cxt.stroke();
}
