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
	for(var i=0;i<100;i++){
		var R=Math.floor(Math.random()*255);
		var G=Math.floor(Math.random()*255);
		var B=Math.floor(Math.random()*255);
		var star={
            r:Math.random()*30+20,
            x:Math.random()*canvas.width,
		    y:Math.random()*canvas.height,
			color:"rgb("+R+","+G+","+B+")",
			vx:Math.random()*0.5-0.25,
			vy:Math.random()*0.5-0.25,
			ax:Math.random()*0.5-0.25,
			ay:Math.random()*0.5-0.25
		};
		stars.push(star);
	}
	canvas.addEventListener("mousedown", detect);
	//canvas.addEventListener("mouseup", recovery);
	//更新
	var timer=setInterval(function(){
		update();
		drawball(context);
	},50);
	//监听事件
	function detect(event){
	   var x=event.clientX-canvas.getBoundingClientRect().left;
	   var y=event.clientY-canvas.getBoundingClientRect().top;
	   for(var i=0;i<stars.length;i++){
		   context.beginPath();
		   context.arc(stars[i].x,stars[i].y,stars[i].r,0,2*Math.PI);
		   if(context.isPointInPath(x,y)){
			 context.fillStyle="red" ;
		     context.fill(); 
			 stars.splice(i,1);
		   }
	   }
	  /* if(a!==-1){
		alert(a);
	    stars[a].color="red";
	    stars[a].vx=0;
	    stars[a].vy=0;
		stars[a].ax=0;
		stars[a].ax=0;
	   }*/
	 }
	  //恢复事件
	function recovery(event){
	  var timer=setInterval(function(){
		update();
		drawball(context);
	  },50);
	}
	function update(){
	  for(var i=0;i<stars.length;i++){
		if(stars[i].color==="red"){
			return;
		}else{
			stars[i].x+=stars[i].vx;
			stars[i].y+=stars[i].vy;
			stars[i].vy+=stars[i].ay;
			stars[i].vx+=stars[i].ax;
		}
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
	  }
	}
	function drawball(cxt){
	  var canvas=cxt.canvas;
	  context.clearRect(0,0,canvas.width,canvas.height);
	  cxt.save();
	  cxt.beginPath();
	  cxt.globalCompositeOperation="lighter";
	  for(var i=0;i<stars.length;i++){
			  cxt.fillStyle=stars[i].color;
			  cxt.beginPath();
			  cxt.arc(stars[i].x,stars[i].y,stars[i].r,0,2*Math.PI);
			  cxt.closePath();
			  cxt.fill();
	  }
	  cxt.closePath();
	  cxt.restore();
	}
}
