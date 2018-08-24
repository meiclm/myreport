var nameText=document.getElementById("nameText");
var idText=document.getElementById("idText");
var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }
        }
    }
};

//第三个问题
function secondQu() {
    var result_3=document.getElementById("result_3");
    second.classList.remove("hide");
    secondNav.classList.add("current");
    threeBox.classList.add("hide");
    threeNav.classList.remove("current");
    result_3.innerText+="diyTrim(\' a f b    \'):"+diyTrim(' a f b    ')
        +',removeRepetition("aaa"):'+removeRepetition("aaa");
}

function diyTrim(str) {
    var a=str.split('');
    var b=new Array();
    var j=0;
    //全角空格 Unicode编码 12288
    //半角空格 Unicode编码 32
    for (var i=0;i<str.length;i++){
        if (str.charCodeAt(i)!=32&&str.charCodeAt(i)!=12288){
                b[j]=a[i];
                j++;
            }
    }
    return b.join('');
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(', ,')); // ->
console.log(diyTrim(',　,')); // ->
console.log(diyTrim(',,')); // ->

/*去掉字符串str中，连续重复的地方*/
function removeRepetition(str) {
    for (var i=0;i<str.length;i++){
        for (var j=i;j<str.length;j++){
            if (str.charCodeAt(i)==str.charCodeAt(j)&&i!=j){
                str=deleteWorld(str,j);
            }
        }
    }
    return str;
}
function deleteWorld(str,k) {
    var one=str.substring(0,k);
    var two=str.substring(k+2,str.length);
    return one+two;
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc


//问题四
document.getElementById("nameBtn").onclick=function () {
    findIdByName(tree,nameText.value);
}
document.getElementById("idBtn").onclick=function () {
   findNameById(tree,idText.value);
}
document.getElementById("otherBtn").onclick=function () {
    console.log("前序遍历");
    getListWithDLR(tree);
    console.log("************************");
    console.log("中序遍历");
    getListWithLDR(tree);
    console.log("************************");
    console.log("后序遍历");
    getListWithLRD(tree);
}
// 假设id和name均不会重复，根据输入name找到对应的id
    function findIdByName(obj,name) {
            if (name==obj.name){
                console.log(obj.id);
                return obj
            }
            if (obj.left) {
                findIdByName(obj.left,name);
            }
               if(obj.right){
                findIdByName(obj.right,name);
            }
    }

// 假设id和name均不会重复，根据输入id找到对应的name
    function findNameById(obj,id) {
        if (id==obj.id){
            console.log(obj.name);
        }
        if (obj.left) {
            findIdByName(obj.left,id);
        }
        if(obj.right){
            findIdByName(obj.right,id);
        }
    }

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
    function getListWithDLR(obj) {
        console.log(obj.name);
    if (obj.left){
        getListWithDLR(obj.left);
    }
    if (obj.right){
        getListWithDLR(obj.right);
    }
    }

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
    function getListWithLDR(obj) {
        if (obj.left){
            getListWithDLR(obj.left);
        }
        console.log(obj.name);
        if (obj.right){
            getListWithDLR(obj.right);
        }
    }

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
    function getListWithLRD(obj) {
        if (obj.left){
            getListWithDLR(obj.left);
        }
        if (obj.right){
            getListWithDLR(obj.right);
        }
        console.log(obj.name);
    }
