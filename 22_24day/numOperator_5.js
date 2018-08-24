//问题5、6
var queueInput=document.getElementById("queue-input");
var queueCont=document.getElementById("queue-cont");
var queue=["apple","pear"];

var stackInput=document.getElementById("stack-input");
var stackCont=document.getElementById("stack-cont");
var stack=["apple","pear"];

var arr1 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
var arr2_0 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
var arr2_1=arr2_0;
var arr3 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
var arr4=[
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];
var arr4_str="";
var result_7=document.getElementById("result-7");



//队列
document.getElementById("in-btn").onclick=function () {
    var newText=queueInput.value;
    queue=addQueue(newText);
    queueCont.innerHTML="入队列后内容："+queue.join("-&gt");
}
document.getElementById("out-btn").onclick=function () {
    queue=deleteQueue(queue);
    queueCont.innerHTML="出队列后内容："+queue.join("-&gt");
}
document.getElementById("font-btn").onclick=function () {
    if(isEmptyQ(queue)){
        queueCont.innerHTML="empty queue!";
    }else
     queueCont.innerHTML="打印头元素："+queue[0];
}
document.getElementById("empty-btn").onclick=function () {
    if (isEmptyQ(queue)){
        queueCont.innerHTML+=" ， 队列为空";
    }else {
        queueCont.innerHTML+=" ， 队列不为空";
    }
}

//栈
document.getElementById("push-btn").onclick=function () {
    var newText=stackInput.value;
    stack=addQueue(newText);
    stackCont.innerHTML="入栈后内容："+stack.join("-&gt");
}
document.getElementById("pop-btn").onclick=function () {
    if (isEmptyQ(stack)){
        stackCont.innerHTML="栈为空！";
    }else {
        var b=new Array(stack.length-1);
        for (let i=0;i<stack.length-1;i++){
            b[i]=stack[i];
        }
        stackCont.innerHTML="出栈后内容："+b.join("-&gt");
    }
}
document.getElementById("font-btn_stack").onclick=function () {
    if (isEmptyQ(stack)){
        stackCont.innerHTML="栈为空！";
    }else {
        stackCont.innerHTML="栈顶内容："+stack[stack.length-1];
    }
}
document.getElementById("empty-btn_stack").onclick=function () {
    if (isEmptyQ(stack)){
        stackCont.innerHTML="栈为空！";
    }else {
        stackCont.innerHTML+=" ， 栈不为空！";
    }
}

//7排序
arr1.sort(function (a,b) {
    return a-b;
});
//a-z
arr2_0.sort(function (a,b) {
    var a1=a.toLowerCase();
    var b1=b.toLowerCase();
    if (a1>b1){
        return -1
    }else {
        return 1;
    }
    return 0;
});
//z-a
arr2_1.sort(function (a,b) {
    var a1=a.toLowerCase();
    var b1=b.toLowerCase();
    if (a1<b1){
        return -1
    }else {
        return 1;
    }
    return 0;
});

for (let i=0;i<arr3.length;i++){
    for (let j=0;j<arr3.length;j++){
        if (arr3[i][1]>arr3[j][1]){
            var temp=arr3[i];
            arr3[i]=arr3[j];
            arr3[j]=temp;
        }
    }
}
arr4.sort(function (a,b) {
    return a.value-b.value;
});

for (let i=0;i<arr4.length;i++){
    arr4_str+="[ "+arr4[i].id+", "+arr4[i].name+", "+arr4[i].value+"], "
}

document.getElementById("btn_7").onclick=function () {
    result_7.innerHTML="数字升序："+arr1
        +"<br>字母，a-z: &nbsp; "+arr2_0+"&nbsp; &nbsp;&nbsp;; z-a: "+arr2_1
        +"<br>二维数组第二格数降序："+arr3
        +"<br>对象数组value升序："+arr4_str;
}

function initQueue(q) {
   return q;
}
function addQueue(str) {
    var a=initQueue(queue);
    a[a.length]=str;
    return a;
}
function deleteQueue(a) {
    var j=1;
    var b=new Array(a.length-1);
    if (isEmptyQ(a)){
        b[0]="empty queue!";
        return b;
    }else {
        for (let i=0;i<a.length-1;i++){
            b[i]=a[j];
            j++;
        }
        return b;
    }
}
function isEmptyQ(a) {
    if (a.length==0){
        return true;
    }else
        return false;
}


