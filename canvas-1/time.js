var WINDOW_WIDTH=window.innerWidth;
var WINDOW_HEIGHT=window.innerHeight;
var R=Math.round(WINDOW_WIDTH*4/5/108)-1;//声明小圆半径是8
var MARGIN_Top=Math.round(WINDOW_HEIGHT/5);
var MARGIN_Left=Math.round(WINDOW_WIDTH/10);
const deadTime=new Date().getTime()+1000*60*2;
var currentTime=0;
//彩色小球
var balls=[];
const colors=["#ffff99","#ff6666","#66cc99","#99cccc","#ffcccc","#69c","#c39","#f90","#c60","#f03"];


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
		 update(context);
	 },50);
}
//计时函数
function update(cxt){
	var nextTime = getcurrentTime();
    var nextHours = parseInt( nextTime / 3600);
    var nextMinutes = parseInt( (nextTime - nextHours * 3600)/60 )
    var nextSeconds = nextTime % 60
    var curHours = parseInt( currentTime / 3600);
    var curMinutes = parseInt( (currentTime - curHours * 3600)/60 )
    var curSeconds = currentTime % 60
    if( nextSeconds != curSeconds ){
       if(parseInt(curHours/10) != parseInt(nextHours/10)){
	     addBalls(MARGIN_Left,MARGIN_Top,parseInt(curHours/10));
	   }
       if(parseInt(curHours%10)!= parseInt(nextHours%10)){
	     addBalls(MARGIN_Left+15*(R+1),MARGIN_Top,parseInt(curHours%10));
	   }
       if(parseInt(curMinutes/10)!= parseInt(nextMinutes/10)){
	     addBalls(MARGIN_Left+39*(R+1),MARGIN_Top,parseInt(curMinutes/10));
	   }
       if(parseInt(curMinutes%10)!= parseInt(nextMinutes%10)){
	     addBalls(MARGIN_Left+54*(R+1),MARGIN_Top,parseInt(curMinutes%10));
	   }
	   
	   if(parseInt(curSeconds/10)!= parseInt(nextSeconds/10)){
	     addBalls(MARGIN_Left+78*(R+1),MARGIN_Top,parseInt(curSeconds/10));
	   }
       if(parseInt(curSeconds%10)!= parseInt(nextSeconds%10)){
	     addBalls(MARGIN_Left+93*(R+1),MARGIN_Top,parseInt(curSeconds%10));
	   }

	    currentTime=nextTime;
	    
    }
	render(cxt);
	updateBalls();
}

//更新彩色小球

function updateBalls(){
  for(var i=0;i<balls.length;i++){
    balls[i].x+=balls[i].vx;
    balls[i].y+=balls[i].vy;
	balls[i].vy+=balls[i].g;
	//碰撞检测
	if(balls[i].y>=WINDOW_WIDTH-R){
		balls[i].y=WINDOW_WIDTH-R;
		balls[i].vy=-balls[i].vy*0.75;
	}
  }
 //删除小球
    var cnt = 0
    for( var i = 0 ; i < balls.length ; i ++ ){
        if( balls[i].x + R > 0 && balls[i].x -R < WINDOW_WIDTH ){
            balls[cnt++] = balls[i];
		}
	}
    while( balls.length > cnt ){
        balls.pop();
    }
	console.log(balls.length);
 
}
//画彩色小球的函数
function addBalls(x,y,num){
	for(var i=0;i<digit[num].length;i++){
	  for(var j=0;j<digit[num][j].length;j++){
		  if(digit[num][i][j]==1){
			  var aBall={
				  x:x+(2*j+1)*(R+1),
				  y:y+(2*i+1)*(R+1),
				  g:1.5+Math.random(),
				  vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
				  vy:-5,
				  color:colors[Math.floor(Math.random()*colors.length)],
			  }
			  balls.push(aBall);
		  }
	  }
	}
}
//渲染函数

function render(cxt){
	cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
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
		
	for(var i=0;i<balls.length;i++){
		  cxt.fillStyle=balls[i].color;
		  cxt.beginPath();
		  cxt.arc(balls[i].x,balls[i].y,R,0,2*Math.PI);
		  cxt.closePath();
		  cxt.fill();
	 }

}

//渲染圆点函数

function renderDigit(x,y,num,cxt){
	cxt.fillStyle="rgb(192,128,192)";
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
   var ret=deadTime-curTime.getTime();
   ret=Math.round(ret/1000);
   return ret>=0 ? ret:0;
}
