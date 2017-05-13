var WINDOW_WIDTH= document.body.clientWidth;
var WINDOW_HEIGHT= document.body.clientHeight;

window.onload=function(){
	var canvas=document.getElementById("canvas");
	canvas.width=WINDOW_WIDTH;
	canvas.height=WINDOW_HEIGHT;
	var searchlight={
            r:Math.random()*50+50,
            x:Math.random()*canvas.width,
		    y:Math.random()*canvas.height,
		    vr:Math.random()*2+2,
			vx:Math.random()*5+5,
			vy:Math.random()*5+5,
    };
	
	var context=canvas.getContext("2d");
	context.globalAlpha=0.7;
	//更新
	var timer=setInterval(function(){
		update();
		text(context);	
	},50);
 function update(){
	 searchlight.x+=searchlight.vx;
    searchlight.y+=searchlight.vy;
	searchlight.r+=searchlight.vr;
	if(searchlight.x>=canvas.width){
		searchlight.x=canvas.width;
		searchlight.vx=-searchlight.vx;
	}
	if(searchlight.x<=0){
		searchlight.x=0;
		searchlight.vx=-searchlight.vx;
	}
	if(searchlight.y>=canvas.height){
		searchlight.y=canvas.height;
		searchlight.vy=-searchlight.vy;
	}
	if(searchlight.y<=0){
		searchlight.y=0;
		searchlight.vy=-searchlight.vy;
	}
		if(searchlight.r>=150){
		searchlight.r=150;
		searchlight.vr=-searchlight.vr;
	}
	if(searchlight.r<=50){
		searchlight.r=50;
		searchlight.vr=-searchlight.vr;
	}
}
function text(cxt){
	var canvas=cxt.canvas;
	cxt.clearRect(0,0,canvas.width,canvas.height);
	cxt.save();
	cxt.beginPath();
	//设置背景
	context.beginPath();
	context.fillStyle="#333";
	context.fillRect(0,0,canvas.width,canvas.height);
	//设置探照灯；
	cxt.arc(searchlight.x,searchlight.y,searchlight.r,0,Math.PI*2);
	cxt.fillStyle="#eee";
	cxt.fill();
	cxt.clip();
    //设置文字阴影
	cxt.font="bolder 32px sans-serif";
	cxt.lineWidth=1;
	cxt.shadowColor="#333";
    cxt.shadowOffsetX=20;
	cxt.shadowOffsetY=20;
	cxt.shadowBlur=5;
	cxt.font="bolder 32px sans-serif";
	var lGrd = cxt.createLinearGradient(0,0,1300,0,0,0);  
    lGrd.addColorStop(0, 'orange');  
    lGrd.addColorStop(0.1, 'yellow'); 
	lGrd.addColorStop(0.2, 'red');   
	lGrd.addColorStop(0.3, 'pink'); 
	lGrd.addColorStop(0.4, 'blue');   
	lGrd.addColorStop(0.5, 'green'); 
	lGrd.addColorStop(0.6, 'orange');  
    lGrd.addColorStop(0.7, 'yellow'); 
	lGrd.addColorStop(0.8, 'red');   
	lGrd.addColorStop(0.9, 'pink'); 
	lGrd.addColorStop(1, 'blue');   
	cxt.strokeStyle=lGrd;
	cxt.strokeText("探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯",80,100);
	cxt.strokeText("探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯",80,150);
	cxt.strokeText("探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯",80,200);
	cxt.strokeText("探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯",80,250);
	cxt.strokeText("探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯",80,300);
	cxt.strokeText("探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯",80,350);
	cxt.strokeText("探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯",80,400);
	cxt.strokeText("探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯",80,450);
	cxt.strokeText("探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯",80,500);
	cxt.strokeText("探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯",80,550);
	cxt.strokeText("探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯探照灯",80,600);
    cxt.closePath();
	cxt.restore();
}



}
