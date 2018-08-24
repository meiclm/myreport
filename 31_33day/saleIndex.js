window.onload=function () {
    function tableTH(t) {
        var tr=document.createElement("tr");
        var th1=document.createElement("th");
        var th2=document.createElement("th");
        var th3=document.createElement("th");
        th1.rowSpan=2;
        th2.rowSpan=2;
        th3.colSpan=12;
        th1.innerHTML="product";
        th2.innerHTML="region";
        th3.innerHTML="sale";
        var tr_1=document.createElement("tr");
        for (let i=0;i<12;i++){
            var th=document.createElement("th");
            th.innerHTML=(i+1)+"月";
            tr_1.appendChild(th);
        }
        tr.appendChild(th1);
        tr.append(th2);
        tr.appendChild(th3);
        t.appendChild(tr);
        t.appendChild(tr_1);
    }

    var table=document.createElement("table");
    tableTH(table);
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
    var resultWrap=document.getElementById("result-wrap");
    resultWrap.appendChild(table);

    var result4=document.getElementById("result-wrap4");
    var checkBtn=document.getElementById("checkBtn");

    document.getElementById("regionDiv").onchange=function () {
        var resultWrap2=document.getElementById("result-wrap2");
        resultWrap2.innerHTML="";
        var mySelect=document.getElementById("region-select");

        var index=mySelect.selectedIndex;//选中的索引值
        var m=mySelect.options[index].value;

        resultWrap2.appendChild(getRegion2(parseInt(m)));

    }
    document.getElementById("result-select").onchange=function () {
        var result3=document.getElementById("result-wrap3");
        result3.innerHTML="";
        var mySelect1=document.getElementById("region-selected");

        var index1=mySelect1.selectedIndex;//选中的索引值
        var m1=mySelect1.options[index1].value;

        var mySelect2=document.getElementById("product-selected");

        var index2=mySelect2.selectedIndex;//选中的索引值
        var m2=mySelect2.options[index2].value;

        result3.appendChild(getRegionsAndProducts(m1,getRegion2(parseInt(m1)),m2));

        result3.innerHTML+=m1+","+m2;
    }

    //全选复选按钮
    var regionBox=document.getElementById("region-checkbox");
    var regionCheckBox=regionBox.children;//取得element
    document.getElementById("regionCheck").onclick=function () {
        for (let j=0;j<regionCheckBox.length;j++){
            regionCheckBox[j].checked=true;
        }
    }
    var productBox=document.getElementById("product-checkbox");
    var productCheckBox=productBox.children;//取得element
    document.getElementById("productCheck").onclick=function () {
        for (let j=0;j<productCheckBox.length;j++){
            productCheckBox[j].checked=true;
        }
    }

//去掉全选,和全部都选了
    var k=0,m=0;
    for (let i=0;i<regionCheckBox.length-1;i++){
        regionCheckBox[i].onchange=function () {
            if (regionCheckBox[i].checked ==false ){
                regionCheckBox[regionCheckBox.length-1].checked=false;
            }
            if (regionCheckBox[i].checked==true){
                k+=1;

                if (k==3){
                    regionCheckBox[regionCheckBox.length-1].checked=true;
                }
            }
        }

        productCheckBox[i].onchange=function () {
            if (productCheckBox[i].checked==false){
                productCheckBox[productCheckBox.length-1].checked=false;
            }
            if (productCheckBox[i].checked==true){
                m+=1;

                if (m==3){
                    productCheckBox[productCheckBox.length-1].checked=true;
                }
            }
        }
    }


    checkBtn.onclick=function () {
        result4.innerHTML="";
        count=0;
        result4.innerHTML=getRegionCheckBox().innerHTML+"<br>"+getProductCheckBox().innerHTML;
    }


var count=0;
    /**
     *返回一个table节点,一个地区的信息
     */
    function getRegion2(k) {
        var table2=document.createElement("table");
        var inputRe=document.querySelectorAll(".region");
        if (count==0){
            tableTH(table2);
        }
        if (k==1){

            for (let i=0;i<inputRe.length;i++){
                if (i==2){
                    var t=inputRe[2].parentNode;
                    table2.innerHTML+=t.innerHTML;
                }
                if(inputRe[i].innerHTML=="华南"){
                    var tr=inputRe[i].parentNode;
                    var trT=tr.innerHTML;
                    table2.innerHTML+=trT;
                }
            }
        } else if (k==2){
            for (let i=0;i<inputRe.length;i++){
                if(inputRe[i].innerHTML=="华北"){
                    var tr=inputRe[i].parentNode;
                    var trT=tr.innerHTML;
                    table2.innerHTML+=trT;
                }
            }
        }else if (k==3){
            for (let i=0;i<inputRe.length;i++){
                if(inputRe[i].innerHTML=="华东"){
                    var tr=inputRe[i].parentNode;
                    var trT=tr.innerHTML;
                    table2.innerHTML+=trT;
                }
            }
        }
        return table2;
    }

    /**
     * 返回一个table节点,根据地区 返回一种产品的信息
     */
    function getProductByRegion(table,str) {
        var table2=document.createElement("table");
        var trList=table.rows;
        if (str==5){
            for (let i=1;i<trList.length;i++){
                var tdList=trList[i].cells;
                if (tdList[0].innerHTML=="手机"){
                    table2.innerHTML+=trList[i].innerHTML;
                }
            }
        }else if (str==6){
            for (let i=0;i<trList.length;i++){
                var tdList=trList[i].cells;

                if (tdList[0].innerHTML=="智能音箱"){
                    table2.innerHTML+=trList[i].innerHTML;
                }
            }
        }else if (str==7){
            for (let i=0;i<trList.length;i++){
                var tdList=trList[i].cells;

                if (tdList[0].innerHTML=="笔记本"){
                    table2.innerHTML+=trList[i].innerHTML;
                }
            }
        }
        return table2;
    }

    function getRegionsAndProducts(k,table,str) {

        var mySelect1=document.getElementById("region-selected");
        var mySelect2=document.getElementById("product-selected");
        var table2=document.createElement("table");

        var option1=mySelect1.options;
        var option2=mySelect2.options;

        for (let i=1;i<option1.length;i++){
            if (option1[i].selected){
                table2=getRegion2(k);
                label:for (let j=1;j<option2.length;j++){
                    if (option2[j].selected){
                        table2=getProductByRegion(table2,str);
                        break label;
                    }else {
                        continue;
                    }
                }
            }
        }

        return table2;
    }
    function getRegionCheckBox() {
        var div=document.createElement("div");
        var regionBox=document.getElementById("region-checkbox");
        var regionCheckBox=regionBox.children;//取得element
        label:for (let i=0;i<regionCheckBox.length-1;i++){
            if (regionCheckBox[i].checked){
                div.appendChild(getRegion2(parseInt(regionCheckBox[i].value)));
                count++;
            }
        }
        return div;
    }

    function getProductCheckBox() {
        var div=document.createElement("div");
        var productBox=document.getElementById("product-checkbox");
        var productCheckBox=productBox.children;//取得element
        label:for (let i=0;i<productCheckBox.length-1;i++){
            if (productCheckBox[i].checked){
                div.appendChild(getProductByRegion(table,parseInt(productCheckBox[i].value)));
            }
        }
        return div;
    }

}