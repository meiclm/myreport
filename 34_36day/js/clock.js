window.onload=function () {
    var t=document.getElementById("time");
    var canvas = document.getElementById("clock");
    var cxt = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var r = width/2; //半径

    draw();
    setInterval(function () {
        cxt.clearRect(0-width,0-height,5*r,5*r);
        paintCircle();
        start();
    },1000);
    function paintCircle() {

        // 画轮廓
        cxt.beginPath();
        cxt.lineWidth = r*0.05;//轮廓圆宽度
        cxt.strokeStyle = "#333";//轮廓圆颜色
        cxt.arc(0,0,r-r*0.05,0,2*Math.PI); //圆
        cxt.stroke();
        cxt.closePath();
        // 画内圆
        cxt.beginPath();
        cxt.lineWidth = 1;
        var radi2 = r*0.85; //半径
        cxt.arc(0,0,radi2,0,2*Math.PI); //圆
        cxt.stroke();
        cxt.fillStyle = "#F8F8FF";
        cxt.closePath();

        var hour = [6,5,4,3,2,1,12,11,10,9,8,7],i = 0;
        for(var deg = 0;deg<360;deg=deg+6){
            var spotX = radi2*Math.sin(deg*2*Math.PI/360);
            var spotY = radi2*Math.cos(deg*2*Math.PI/360);
            var spot = r*0.012; //刻度半径
            cxt.beginPath();
            cxt.fillStyle = "#000";

            //先画分钟刻度线，每6°画一条线，共60条刻度线（循环）；
            //画时钟刻度线，每30°画一条线，相对分针长一点粗一点，共12条线
            if(deg%30==0){
                cxt.fillStyle = "#333";
                spot = r*0.025;
                var textX =(radi2*0.85)*Math.sin(deg*Math.PI/180); //文字x坐标
                var textY =(radi2*0.85)*Math.cos(deg*Math.PI/180); //文字y坐标
                cxt.font = r*0.1 + "px Arial";
                cxt.textBaseline = "middle";// 文字垂直对齐方式
                cxt.textAlign = "center";   // 文字水平对齐方式
                cxt.fillText(hour[i],textX,textY);
                i++;
            }
            cxt.arc(spotX,spotY,spot,0,2*Math.PI);
            cxt.fill();
            cxt.closePath();
        }

        // 画中心
        cxt.beginPath();
        cxt.arc(0,0,r*0.05,0,2*Math.PI);
        cxt.stroke();
        cxt.closePath();
    }


    function draw() {
        //重置
        cxt.save();
        cxt.translate(width/2,height/2);//画圆点
        // 画轮廓
        paintCircle();
    }

    function start() {
        var now=new Date();
        var h=now.getHours();
        var m=now.getMinutes();
        var s=now.getSeconds();
        drawSecond(s);
        drawMinute(m,s)
        drawHour(h,m);

        if (h<10){
            h='0'+h;
        }
        if (m<10){
            m='0'+m;
        }
        t.innerHTML="<h2>"+h+" : "+m+"</h2><br>"+now.getFullYear()+"年"+(now.getMonth()+1)+"月"+now.getDate()+"日"
    }


    function drawSecond(s){
        // 秒针
        cxt.save();
        cxt.beginPath();
        cxt.rotate(2*Math.PI/60*s);
        cxt.strokeStyle = "#ff004f";
        cxt.lineWidth = 1;
        cxt.lineCap = "round";
        cxt.moveTo(0,r*0.8*0.2);
        cxt.lineTo(0,-r*0.8*0.8);
        cxt.stroke();
        cxt.closePath();
        cxt.restore();
    }

    function drawMinute(m,s){
        // 分针
        m = m + s/60;
        cxt.save();
        cxt.beginPath();
        cxt.rotate(2*Math.PI/60*m);
        cxt.lineWidth = 3;
        cxt.lineCap = "round";
        cxt.moveTo(0,r*0.7*0.2);
        cxt.lineTo(0,-r*0.7*0.8);
        cxt.stroke();
        cxt.closePath();
        cxt.restore();
    }

    function drawHour(h,m){
        // 时针
        h = h + m/60;
        cxt.save();
        cxt.beginPath();
        cxt.rotate(2*Math.PI/12*h);//旋转的角度
        cxt.lineWidth = r*0.05;
        cxt.lineCap = "round";
        cxt.moveTo(0,r*0.6*0.2);
        cxt.lineTo(0,-r*0.6*0.8);
        cxt.stroke();
        cxt.closePath();
        cxt.restore();
    }
}