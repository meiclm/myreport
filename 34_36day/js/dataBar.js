window.onload=function () {
    //表格
    var table=document.getElementById("dataSource");
    histogramChange(table);
    var colorTip=document.getElementById("tip");


    //表格
    var tr=document.querySelectorAll("tr");
    for (let i=0;i<tr.length;i++){
        tr[i].onmousemove=function () {
            var td=tr[i].children;
            ctx.clearRect(0,0,600,520);
            ctx2.clearRect(0,0,600,520);

            drawFramework(ctx);
            drawFramework(ctx2);

            getOneBar(td[1].innerHTML,td[0].innerHTML,arrColor[i-1]);
            drawPoint(arrColor[i-1],i-1)
        }
    }

    //复选框
    var check1=document.querySelector("#check1");
    var checkBox1=check1.children;
    checkBox1[checkBox1.length-1].onclick=function () {
        for (let i=0;i<checkBox1.length-1;i++){
            checkBox1[i].checked=true;
        }
    }

    var check2=document.querySelector("#check2");
    var checkBox2=check2.children;
    checkBox2[checkBox2.length-1].onclick=function () {
        for (let i=0;i<checkBox2.length-1;i++){
            checkBox2[i].checked=true;
        }

    }

    var str="";
    check1.onchange=function () {
        removeTipChildren();
        ctx2.clearRect(0,0,600,520);
        //全部选择后，其中一个取消，全选的复选框取消
        for (let i=0;i<checkBox1.length-1;i++){
            if (checkBox1[i].checked==false){
                checkBox1[checkBox1.length-1].checked=false;
            }
        }
        if (checkBox1[0].checked==true&&checkBox1[1].checked==true&&checkBox1[2].checked==true){
            checkBox1[checkBox1.length-1].checked=true;
        }


        for (let i=0;i<checkBox1.length-1;i++){
            ctx2.save();
            drawFramework(ctx2);
            if (checkBox1[i].checked==true){
                findRegion(checkBox1[i].value);
                }
            }

    }

    function removeTipChildren() {
        var children=colorTip.children;
        for (let i=0;i<children.length;i++){
            children[i].parentNode.removeChild(children[i]);
        }
     }

    check2.onchange=function () {
        removeTipChildren();
        ctx2.clearRect(0,0,600,520);
        //全部选择后，其中一个取消，全选的复选框取消
       for (let i=0;i<checkBox2.length-1;i++){
            if (checkBox2[i].checked==false){
                checkBox2[checkBox2.length-1].checked=false;
            }
       }
        if (checkBox2[0].checked==true&&checkBox2[1].checked==true&&checkBox2[2].checked==true){
            checkBox2[checkBox2.length-1].checked=true;
        }

        for (let i=0;i<checkBox2.length-1;i++){
            ctx2.save();
            drawFramework(ctx2);
            if (checkBox2[i].checked) {
                findProduct(checkBox2[i].value);
            }
        }
    }
    colorTip.innerHTML=str+"";

    //颜色
    var arrColor=["#FFFF00","#FF00FF","#FF0000","#0000FF","#00FFFF","#4682B4","#008000","#7FFF00","#8FBC8F"];

    //图
    var data1=document.getElementById("data1");
    var ctx = data1.getContext("2d");
    var width = data1.width;
    var height = data1.height;
    var r = width/2; //半径

    var data2=document.getElementById("data2");
    var ctx2 = data2.getContext("2d");
    var width2 = data2.width;
    var height2 = data2.height;
    var r2 = width2/2; //半径

    allRegion();
    function allRegion() {
        //柱状图
        start1();
        //曲线图
        start2();
    }

    function start1() {
        //重置
        ctx.save();
        drawFramework(ctx);
        drawBar("#FFFF00",0,15);
    }
    function start2() {
        //重置
        ctx2.save();
        drawFramework(ctx2);

        for (let i = 0; i < sourceData.length; i++) {
            findProductAndRegion(sourceData[i].product,sourceData[i].region,arrColor[i]);
        }
    }

    function getOneBar(strRe,strPro,color) {
        for (let i=0;i<sourceData.length;i++){
            if (sourceData[i].region==strRe){
                if (sourceData[i].product==strPro){
                    drawBar(color, i,15);
                }
            }
        }
    }
    //框架
    function drawFramework(ctx) {
        ctx.beginPath();
        ctx.lineWidth=1;
        ctx.strokeStyle="#000";
        ctx.moveTo(5,0);
        ctx.lineTo(5,450);
        ctx.lineTo(595,450);
        ctx.stroke();

    }

    //设置12个月的销售点
    function drawPoint(color,index) {
        ctx2.beginPath();
        ctx2.lineWidth=1;
        ctx2.strokeStyle=color;
        ctx2.font = 13 + "px Arial";
        ctx2.textBaseline = "middle";// 文字垂直对齐方式
        ctx2.textAlign = "center";   // 文字水平对齐方式
        for (let i=0;i<12;i++){
            ctx2.arc(47*i+30,420-(sourceData[index].sale[i]/2),3,0,2*Math.PI);
            ctx2.fillText((i+1)+"月",47*i+30,460);
        }
        ctx2.stroke();
    }

    function drawBar(color,index,k) {
        for (let i=0;i<12;i++){
            ctx.beginPath();
            ctx.fillStyle=color;
            ctx.font = 13 + "px Arial";
            ctx.textBaseline = "middle";// 文字垂直对齐方式
            ctx.textAlign = "center";   // 文字水平对齐方式
            ctx.fillRect(47*i+k,450-(sourceData[index].sale[i]/2),35,sourceData[index].sale[i]/2);
            ctx.fillText((i+1)+"月",47*i+30,460);
        }

    }
    //找到某个地区
   function findProduct(str) {
       var span=document.createElement("span");
       span.innerHTML=str+":";
       colorTip.appendChild(span);
        for (let i=0;i<sourceData.length;i++){
            console.log(i);
           if (sourceData[i].product==str){
               drawPoint(arrColor[i],i);
               var span=document.createElement("span");
               span.style.backgroundColor=arrColor[i];
               span.innerHTML="00";
               span.style.color="white";
               colorTip.appendChild(span);
           }
        }

   }
//找到某个产品
function findRegion(str) {
    var span=document.createElement("span");
    span.innerHTML=str+":";
    colorTip.appendChild(span);
        for (let i=0;i<sourceData.length;i++){
            console.log(i);
            if (sourceData[i].region==str){
                drawPoint(arrColor[i],i);
                var span=document.createElement("span");
                span.style.backgroundColor=arrColor[i];
                span.innerHTML="00";
                span.style.color="white";
                colorTip.appendChild(span);
            }
        }

}

//找到某个地区的某个产品
    function findProductAndRegion(pro,region,color) {
        for (let i=0;i<sourceData.length;i++){
            if (sourceData[i].product==pro&&sourceData[i].region==region){
                drawPoint(color,i);
            }
        }
    }


    function histogramChange(table) {

            for (let i=0;i<sourceData.length;i++) {
                var tr = document.createElement("tr");

                var td1 = document.createElement("td");
                var td2 = document.createElement("td");

                td1.innerHTML = sourceData[i].product ;
                td2.innerHTML = sourceData[i].region ;
                td1.className="product";
                td2.className="region";
                tr.appendChild(td1);
                tr.appendChild(td2);
                for (let j = 0; j < 12; j++) {
                    var td3 = document.createElement("td");
                    td3.innerHTML = sourceData[i].sale[j]+"";
                    td3.className="sale"
                    tr.appendChild(td3);
                }
                table.appendChild(tr);
            }
        }
}


