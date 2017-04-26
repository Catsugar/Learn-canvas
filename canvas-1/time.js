var WINDOW_WIDTH=window.innerWidth;
var WINDOW_HEIGHT=window.innerHeight;
var R=8;//声明小圆半径是8
var MARGIN_Top=60;
var MARGIN_Left=30;
const deadTime=new Date(2017,3,26,23,56,00);
var currentTime=0;
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
	 var timer=setInterval(function(){
		 context.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
		 currentTime=getcurrentTime();
	     render(context);
	 },1000);


	
}


//渲染函数

function render(cxt){
	var hours=parseInt(currentTime/3600);
	var minutes=parseInt((currentTime%3600)/60);
	var seconds=parseInt(currentTime%60);
	renderDigit(MARGIN_Left,MARGIN_Top,parseInt(hours/10),cxt);
	renderDigit(MARGIN_Left+15*(R+1),MARGIN_Top,parseInt(hours%10),cxt);
	renderDigit(MARGIN_Left+30*(R+1),MARGIN_Top,10,cxt);
	renderDigit(MARGIN_Left+39*(R+1),MARGIN_Top,parseInt(minutes/10),cxt);
	renderDigit(MARGIN_Left+54*(R+1),MARGIN_Top,parseInt(minutes%10),cxt);
	renderDigit(MARGIN_Left+69*(R+1),MARGIN_Top,10,cxt);
	renderDigit(MARGIN_Left+78*(R+1),MARGIN_Top,parseInt(seconds/10),cxt);
	renderDigit(MARGIN_Left+93*(R+1),MARGIN_Top,parseInt(seconds%10),cxt);
}

//渲染圆点函数

function renderDigit(x,y,num,cxt){
	cxt.fillStyle="rgb(255,128,192)";
	for(var i=0;i<digit[num].length;i++){
	  for(var j=0;j<digit[num][j].length;j++){
		  if(digit[num][i][j]==1){
			  cxt.beginPath();
			  cxt.arc(x+(2*j+1)*(R+1),y+(2*i+1)*(R+1),R,0,2*Math.PI);
			  cxt.closePath();
			  cxt.fill();
		  }
	  }
	}
}
//计算时间
function getcurrentTime(){
   var curTime=new Date();
   console.log("截止时间"+deadTime.getTime());
   console.log("现在时间"+curTime.getTime());
   var ret=deadTime.getTime()-curTime.getTime();
   ret=Math.round(ret/1000);
   console.log("时间差间"+ret);
   return ret>=0 ? ret:0;
}
