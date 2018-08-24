
var year=document.querySelector("#year-select");
var month=document.querySelector("#month-select");
var day0=document.querySelector("#day-select");
var hour0=document.querySelector("#hour-select");
var minute0=document.querySelector("#minute-select");
var second0=document.querySelector("#second-select");
//初始化

function init() {
    setYMD(year,2000,33);
    setYMD(month,1,12);
    setYMD(day0,1,31);
    setHMS(hour0,24);
    setHMS(minute0,60);
    setHMS(second0,60);
}

function setYMD(objElement,k,count) {
    objElement.innerHTML="";
    for (i=k;i<k+count;i++){
        var option=document.createElement('option');
        option.value=i;
        option.innerHTML=i;
        objElement.appendChild(option)
    }
}

function setHMS(objElement,count) {
    objElement.innerHTML="";
    for (let i=0;i<count;i++){
        var option=document.createElement('option');
        option.value=i;
        if (i<10){
            option.innerHTML='0'+i;
        }else {
            option.innerHTML=i;
        }

        objElement.appendChild(option)
    }
}
function isLeaf(yearValue) {
    var flag=false;
    if (yearValue%4==0&&yearValue%100!=0||yearValue%400==0){
        flag=true
    }
    return flag;
}

function getWeek(w) {
    var weekday=["日","一","二","三","四","五","六"];
    return weekday[w];
}

function intervalTime(year,month) {

    var day=document.querySelector("#day-select").value;
    var hour=document.querySelector("#hour-select").value;
    var minute=document.querySelector("#minute-select").value;
    var second=document.querySelector("#second-select").value;

    var date=new Date();
    date.setFullYear(year);
    date.setMonth(month-1);//注意要-1
    date.setDate(day);
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);
    var week=getWeek(date.getDay());

    //获取现在时间
    var nowDate = new Date();
    var result = document.getElementById("result-wrapper");
    var times=nowDate.getTime()-date.getTime();
    var intervalDay =Math.floor(times/(24*60*60*1000));
    var intervalHour=Math.floor((times-intervalDay*86400000)/3600000);
    var intervalMinute=Math.floor((times-intervalDay*86400000-intervalHour*3600000)/60000);
    var intervalSecond=Math.floor((times-intervalDay*86400000-intervalHour*3600000-intervalMinute*60000)/1000);

    //页面时间在过去

    if(times>0){
        console.log("页面时间在过去");
        result.innerHTML = `现在距离${year}年${month}月${day}日 星期${week}\n' +
            ${hour}:${minute}:${second} 已经过去${intervalDay}天${intervalHour}小时${intervalMinute}分${intervalSecond}秒`;

    }else{//页面时间在未来
        console.log("页面时间在未来");
        result.innerHTML = `现在距离${year}年${month}月${day}日 星期${week} 
            ${hour}:${minute}:${second} 还有${intervalDay+1}天${intervalHour-23}小时${60-intervalMinute}分${60-intervalSecond}秒`;

    }


}

//判断月份天数

function judgeMonth(year,month){

    var days = document.querySelectorAll("#day-select option:nth-last-child(-n+3)");
    Array.from(days).map(function(item){
        item.style.display = "block";
    });

    if(year && month == 2){

        var disableDays = document.querySelectorAll("#day-select option:nth-last-child(-n+2)");
        Array.from(disableDays).map(function(item){

            item.style.display = "none";

        });

    }else if(!year && month == 2){

        var disableDays = document.querySelectorAll("#day-select option:nth-last-child(-n+3)");

        Array.from(disableDays).map(function(item){

            item.style.display = "none";

        })

    }

    if([4,6,9,11].includes(month)){// 30天

        var disableDays = document.querySelector("#day-select option:nth-last-child(1)");

        disableDays.style.display = "none";

    }

}
window.onload=function () {
    init();
    intervalTime(year.value,month.value);
}


var timeSelect=document.querySelector("#timeSelect");
timeSelect.onchange = function(event){
    if(event.target.id == "year-select" || event.target.id == "month-select"){

        judgeMonth(isLeaf(year.value),month.value);

    }

    intervalTime(year.value,month.value);

}

setInterval(function(){intervalTime(year.value,month.value);},1000);