var WINDOW_WIDTH= document.body.clientWidth;
var WINDOW_HEIGHT= document.body.clientHeight;
var stars=[];
window.onload=function(){
	var canvas=document.getElementById("canvas");
	canvas.width=WINDOW_WIDTH;
	canvas.height=WINDOW_HEIGHT;
	var context=canvas.getContext("2d");
	context.globalAlpha=0.7;	
	//背景
	context.fillStyle="#000";
	context.fillRect=(0,0,canvas.width,canvas.height);
    //画星星
	for(var i=0;i<150;i++){
		var R=Math.floor(Math.random()*255);
		var G=Math.floor(Math.random()*255);
		var B=Math.floor(Math.random()*255);
		var star={
            r:Math.random()*20+5,
            x:Math.random()*canvas.width,
		    y:Math.random()*canvas.height,
			color:"rgb("+R+","+G+","+B+")",
			vx:Math.random()*4-2,
			vy:Math.random()*4-2,
			ax:Math.random()*2-1,
			ay:Math.random()*2-1
		};
		stars.push(star);
	    drawball(context, stars[i].x,stars[i].y,stars[i].r,stars[i].color);
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
	 drawball(context, stars[i].x,stars[i].y,stars[i].r,stars[i].color);
  }
}
function drawball(cxt, x,y,r,color){
  cxt.globalCompositeOperation="xor";
  for(var i=0;i<stars.length;i++){
		  cxt.fillStyle=color;
		  cxt.beginPath();
		  cxt.arc(x,y,r,0,2*Math.PI);
		  cxt.closePath();
		  cxt.fill();
  }
}