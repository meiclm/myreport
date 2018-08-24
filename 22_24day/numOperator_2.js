//第二个问题
var threeBox=document.querySelector("#three");
var second=document.getElementById("second");

var secondNav=document.getElementById("secondNav");
var threeNav=document.getElementById("threeNav");

function threeQu() {
    threeNav.classList.add("current");
    threeBox.classList.remove("hide");
    second.classList.add("hide");
    secondNav.classList.remove("current");
}

// var second=document.getElementById("second");
// var buttonList=second.querySelectorAll("button");
//我很想知道为什么上面这两句不能实现

var result_2=document.querySelector("#result_2");
var buttonList=document.querySelectorAll(".btn");

var radioList=document.querySelectorAll(".radio-obj");
var textarea=document.querySelectorAll("textarea");
var num=document.querySelectorAll(".num");

// 第一个按钮
buttonList[0].onclick=function () {
    for (var i=0;i<radioList.length;i++){
        label_1: if (radioList[i].checked){
            result_2.innerHTML="该输入框的文本长度为：input_"+i+" , "+textarea[i].value.length;;

            break label_1;
        }
    }
}

//第二个按钮
buttonList[1].onclick=function () {
    for (var i=0;i<radioList.length;i++){
        label_1: if (radioList[i].checked){
            result_2.innerHTML="当前选中输入中的第3个字符： "+textarea[i].value[2];
            break label_1;
        }
    }
}
//第三个按钮
buttonList[2].onclick=function () {
    // for (var i=0;i<textarea.length;i++){
    //     result_2.textContent+=textarea[i].value+" ; ";
    // }
    var str1 = textarea[0].value.split('');//数组
    var str2 = textarea[1].value.split('');

    var B = new Array(textarea[1].value,"  0000  ");
    var a = new Array();
    result_2.textContent =a.concat(textarea[0].value,str2.join())+",B的join（）："+B.join();
}
//第4个按钮
buttonList[3].onclick=function () {
    var indexFirst=textarea[0].value.indexOf(textarea[1].value);
    var str='';
    if (indexFirst>0){
        str="B在A中第一次出现的位置为："+(indexFirst+1);
    }else {
        str="A中没有B";
    }
    result_2.textContent=str;
}
//第5个按钮
buttonList[4].onclick=function () {
    var indexFirst=textarea[1].value.lastIndexOf(textarea[0].value);
    var str='';
    if (indexFirst>0){
        str="A在B中最后一次出现的位置为："+(indexFirst+1);
    }else {
        str="B中没有A";
    }
    result_2.textContent=str;
}
//第6个按钮
buttonList[5].onclick=function () {
    var num_b=parseInt(num[1].value);
    var num_a=parseInt(num[0].value);
    for (var i=0;i<radioList.length;i++){
        label_1: if (radioList[i].checked){
            result_2.innerHTML="slice(num_a,num_b)获取选中输入框内容的部分内容："+textarea[i].value.slice(num_a,num_b);
            break label_1;
        }
    }
}
//第7个按钮
buttonList[6].onclick=function () {
    for (var i=0;i<radioList.length;i++){
        label_1: if (radioList[i].checked){
            result_2.innerHTML="当前选中输入框的行数："+textarea[i].rows;
            break label_1;
        }
    }
}
//第8个按钮
buttonList[7].onclick=function () {
    for (var i=0;i<radioList.length;i++){
        var num_b=parseInt(num[1].value);
        var num_a=parseInt(num[0].value);
        label_1: if (radioList[i].checked){
            result_2.innerHTML="substr(start,length)获取选中输入框内容的子字符串："+textarea[i].value.substr(num_a,num_b);
            break label_1;
        }
    }
}
//第9个按钮
buttonList[8].onclick=function () {
    for (var i=0;i<radioList.length;i++){
        var num_b=parseInt(num[1].value);
        var num_a=parseInt(num[0].value);
        label_1: if (radioList[i].checked){
            result_2.innerHTML="大写的字符串："+textarea[i].value.toUpperCase();
            break label_1;
        }
    }
}

//第10个按钮
buttonList[9].onclick=function () {
    for (var i=0;i<radioList.length;i++){
        var num_b=parseInt(num[1].value);
        var num_a=parseInt(num[0].value);
        label_1: if (radioList[i].checked){
            result_2.innerHTML="小写的字符串："+textarea[i].value.toLowerCase();
            break label_1;
        }
    }
}

//第11个按钮
buttonList[10].onclick=function () {
    for (var i=0;i<radioList.length;i++){
        var num_b=parseInt(num[1].value);
        var num_a=parseInt(num[0].value);
        label_1: if (radioList[i].checked){
            result_2.innerHTML="输入框中内容的半角空格全部去除："+textarea[i].value.replace(/(^\s+)|(\s+$)/g,"");
            result_2.innerHTML+=trim(textarea[i].value);
            //效果不是很明显
            break label_1;
        }
    }
}
//去左空格;
function ltrim(s){
    return s.replace( /^[" "|"　"]*/, "");
}
//去右空格;
function rtrim(s){
    return s.replace( /[" "|"　"]*$/, "");
}
//左右空格;
function trim(s){
    return rtrim(ltrim(s));
}
//第12个按钮
buttonList[11].onclick=function () {
    for (var i=0;i<radioList.length;i++){
        label_1: if (radioList[i].checked){
            result_2.innerHTML="原来的内容："+textarea[i].value;
            var str=changeText(i,textarea[0].value,textarea[1].value);
            textarea[i].value=str;
            break label_1;
        }
    }
}
function changeText(k,str_1,str_2) {
    var str="";
    if (k==1){
        str=str_1;
    }else {
        str=str_2;
    }
    console.log(str);
    return str;
}