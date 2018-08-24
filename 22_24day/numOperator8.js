
var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    },
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    },
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
};

var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];

document.getElementById("result_8").onclick=function () {
    console.log("对象转化为数组");
    arrayOp(scoreObject);
    console.log("*********************************************************************");
    console.log("数组转化为对象");
    objArray();
}
function arrayOp(score) {
    var menuArr=new Array();
    for (o in score){
        var arr=[];
        arr.unshift(o);
        for (k in score[o]){
            arr.unshift(k);
        }
        menuArr.unshift(arr);
    }
    console.log(menuArr);
}
function objArray() {
    var mapped=menuArr.map(function (arr,i) {
        return {objNum:arr[0],obj:{name:arr[1]},parentNum:arr[2]};//返回一个对象
    });
    var menuObj={};
    var k=0;
    function changeObj() {
        for (var i=mapped.length-2;i>=0;i--){
            for (var j=mapped.length-1;j>=0;j--){
                if (mapped[i].objNum==mapped[j].parentNum){
                   if (mapped[i].obj["subMenu"]){
                       mapped[i].obj["subMenu"][mapped[j].objNum]=mapped[j].obj;
                   }else {
                       mapped[i].obj["subMenu"]={};
                       mapped[i].obj["subMenu"][mapped[j].objNum]=mapped[j].obj;
                   }
                }
            }
        }
        menuObj[mapped[0].objNum]=mapped[0].obj;
        menuObj[mapped[1].objNum]=mapped[1].obj;
        console.log(menuObj);
    }
    changeObj();
}

