var resultText=document.getElementById("showResult");
function getAllListItem() {
    // 返回页面中所有li标签
    var listLi=document.querySelectorAll("li");
    var text="";
    for (var i=0;i<listLi.length;i++){
        text+="li : "+listLi[i].innerHTML+" <br> ";
    }
    resultText.innerHTML="页面中所有li标签:<br>"+text;
}

function findAllHtmlSpanInOneSection(sectionId) {
    // 返回某个section下所有span中内容为HTML的span标签
    resultText.innerText=" span中内容为HTML的span标签:";
    var sectionList=document.getElementsByClassName(sectionId);
    var k=1;
    for (var i=0;i<sectionList.length;i++){
        var spa=sectionList[i].querySelectorAll("span");
        for (var j=0;j<spa.length;j++){
            if (spa[j].textContent=="HTML"){
                resultText.innerText+=" "+k+"、"+spa[j].innerHTML+"  ； ";
                k++;
            }
        }

    }

}

function findListItem(sectionId, spanCont) {
    // 返回某个section下，所有所包含span内容为spanCont的LI标签
    resultText.innerHTML="< span >的内容为JS的li标签："
    var sectionList=document.getElementsByClassName(sectionId);
    for (var i=0;i<sectionList.length;i++){
        var span=sectionList[i].querySelectorAll("sapn");
        for(var j=0;j<span.length;j++){
           if (span[j].textContent==spanCont){
               var li=span[j].parentNode;
               resultText.innerHTML+=li.innerHTML;
           }
       }
    }
}

function getActiveLinkContent(sectionId) {
    // 返回某个section下，class为active的链接中包含的文字内容
    resultText.innerHTML="class='active'的< a >的文字内容："
    var a=document.getElementsByClassName(sectionId);
    for (var i=0;i<a.length;i++){
        resultText.innerHTML+=a[i].textContent+" ; ";
    }
}

document.getElementById("btn1").onclick=function(){
    getAllListItem();
}
document.getElementById("btn2").onclick=function(){
    findAllHtmlSpanInOneSection("section");
}
document.getElementById("btn3").onclick=function(){
    findListItem("section","JS");
}
document.getElementById("btn4").onclick=function(){
    getActiveLinkContent("active");
}