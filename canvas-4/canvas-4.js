var WINDOW_WIDTH= document.body.clientWidth;
var WINDOW_HEIGHT= document.body.clientHeight;
var transX=0,transY=0,Rot=0,Scale=1;
var buttons=document.getElementsByTagName("button");

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
    draw(context,transX,transY,Scale,Rot);
	 //绑定事件
    for(var i=0;i<buttons.length;i++){
	  buttons[i].id=i;
	  buttons[i].onclick=function(){
		context.clearRect(0,0,canvas.width,canvas.height);
		if(this.id==0){
			transY-=10;
		}else if(this.id==1){
			transY+=10;
		}else if(this.id==2){
			transX-=10;
		}else if(this.id==3){
			transX+=10
		}else if(this.id==4){
			Scale*=0.9;
		}else if(this.id==5){
			Scale*=1.1
		}else if(this.id==6){
			Rot+=30;
		}
		draw(context,transX,transY,Scale,Rot);
	 }
	}
}

function draw(cxt,x,y,s,r){
    //画星星
	cxt.save();
	cxt.translate(x,y);
	cxt.scale(s,s);
	cxt.rotate(r);
	drawstar(cxt, 100,300,100,50,10,'#ccc','rgb(233,70,100)',30);
	drawstar(cxt, 200,400,80,40,10,'#ccc','rgb(100,233,100)',60);
	drawstar(cxt, 420,380,80,40,10,'#ccc','rgb(100,100,250)',90);
	//画箭头
    drawarrow(cxt, 100,100,100,10,'#ccc','pink');
	cxt.restore();
}

//画箭头
function drawarrow(cxt, x,y,r,borderwidth,bordercolor,fillcolor){
	
	cxt.beginPath();
	cxt.lineTo(x,y);
	cxt.lineTo(2*r+x,y);
	cxt.lineTo(2*r+x,y-r*0.4);
	cxt.lineTo(3*r+x,y+r/2);
	cxt.lineTo(2*r+x,y+1.4*r);
	cxt.lineTo(2*r+x,y+r);
	cxt.lineTo(x,y+r);
	cxt.closePath();
	cxt.fillStyle=fillcolor;
	cxt.fill();
	cxt.lineWidth=10;
	cxt.strokeStyle=bordercolor;
	cxt.stroke();
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
    cxt.lineJoin="round";
	cxt.strokeStyle=bordercolor;
	cxt.stroke();
}
