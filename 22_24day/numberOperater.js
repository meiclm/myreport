

var radio=document.getElementsByName("math-obj");

var num=document.querySelectorAll(".num");
var tip=document.querySelectorAll(".tip");

var result=document.getElementById("result");
//第一个button
var buttonList=document.querySelectorAll("button");
    buttonList[0].onclick=function () {
        for (var i=0;i<radio.length;i++){
            if (radio.item(i).checked){
                if (isNaN(num.item(i).value)){
                    console.log("panduan 1?");
                    result.innerHTML=tip.item(i).textContent+"不是数字";
                }else {
                    console.log("panduan 2?");
                    result.innerHTML=tip.item(i).textContent+"是数字";
                    break;
                }
            }else {
                result.innerHTML="没有选择单选按钮!";
            }
        }
    }

    function numIsNumber(x) {
        if (isNaN(x.value)){
            console.log("不是数字，请输入数字");
            return false;
        }else {
            return true;
        }
    }
    //第二个button
buttonList[1].onclick=function () {
    var num_1=num.item(0).value;
    var num_2=num.item(1).value;

    var num_b=parseInt(num_2);

    if (num_1.indexOf(".")>0){//输入有小数点
        var index=num_1.indexOf(".");

        var num_a=num_1.substring(0,index+1);
        var pointA=num_1.substring(index+1,num_1.length);

        var str='';
        var l=num_b;
        var k=pointA.charAt(l);//结果字符串的最后的一个数字的后一个
        if (numIsNumber(num.item(0))&&numIsNumber(num.item(1))){
            if (pointA.length>num_b){
                if (parseInt(k)<5){//舍四
                    num_a+=num_1.substring(index+1,index+num_b+1);
                    str=num_a.substring(0,index+l+1);
                }else {//五入
                    var i=num_b-1;
                    num_a+=isNine(pointA,i);
                    str=num_a.substring(0,index+num_b+1);
                }

            }else {
                var str_1=num_1.substring(index+1,num_1.length);
                var len=num_b-str_1.length;
                for (var i=0;i<len;i++){
                    str_1+='0';
                }
                str=num_a+str_1;
            }
            result.innerHTML=" 结果："+str;
        }
    }else {//没有小数点
        num_1+='.';
        for (var j=0;j<num_b;j++){
            num_1+='0';
        }
       result.innerHTML="结果为: "+num_1;
    }
    result.innerHTML+="   <br> 结束"

}

function isNine(str,x) {
        var a=str.split('');
        console.log("a:"+a);
        var sNew="";
        if (a[x]=='9'){
            isNine(str,x-1);
            a.splice(x,x,'0');
            console.log("运行了？");
        }else {
            var k=parseInt(a[x])+1;
            a.splice(x,x,k.toString());
        }

        console.log(a+","+a.join(''));
        return a.join('');
}

//第三个button
buttonList[2].onclick=function () {
    for (var i=0;i<radio.length;i++){
        if (radio[i].checked){
            var n=parseFloat(num.item(i).value);
            result.innerText="绝对值为："+Math.abs(n);
            break;
        }else
            result.innerHTML="没有选择按钮!";
    }
}
//4对当前选中的数字进行上舍入第四个button
buttonList[3].onclick=function () {
    for (var i=0;i<radio.length;i++){
        if (radio[i].checked){
            result.innerHTML="上舍入的结果为："+Math.ceil(parseFloat(num.item(i).value));
            break;
        }else
            result.innerHTML="没有选择按钮!";
    }
}

//第五个Button 下舍入
buttonList[4].onclick=function () {
    for (var i=0;i<radio.length;i++){
        if (radio[i].checked){
            result.innerHTML="下舍入的结果为："+Math.floor(parseFloat(num.item(i).value));
            break;
        }
    }
}

//第六个button 把当前选中的数字四舍五入为最接近的整数
buttonList[5].onclick=function () {
    for (var i=0;i<radio.length;i++){
        if (radio[i].checked){
            var numRadio=parseFloat(num[i].value);
            result.innerHTML="四舍五入为最接近的整数的结果为："+Math.round(parseFloat(num.item(i).value));
            break;
        }
    }
}

//第七个button 7返回 A 和 B 中的最高值
buttonList[6].onclick=function () {
    var a=parseFloat(num[0].value);
    var b=parseFloat(num[1].value);
    result.innerHTML="最高值为："+Math.max(a,b);
}

//第八个button 返回 A 和 B 中的最低值
buttonList[7].onclick=function () {
    var a=parseFloat(num[0].value);
    var b=parseFloat(num[1].value);
    result.innerHTML="最高值为："+Math.min(a,b);
}

var person = {
    name : ['Bob', 'Smith'],
    age : 32,
    gender : 'male',
    interests : ['music', 'skiing'],
    bio : function() {
        alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
        alert('Hi! I\'m ' + this.name[0] + '.');
    }
};