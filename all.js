//宣告各個節點的變數
var optionlist = document.querySelector(".optionlist");
var hotzone = document.querySelector(".hotzone");
var option = document.querySelector(".option")
var list = document.querySelector(".list");
var text = document.querySelector(".text");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");


//連結JSON檔案
let xhr = new XMLHttpRequest();
xhr.open("get", "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97", true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send();
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    var length = data.result.records.length;
    var zone = [];
    //新增區域陣列
    for (let i = 0; i < length; i++) {
        zone.push(data.result.records[i].Zone);
    };

    // 再用 foreach 去判斷陣列裡面所有值是否有吻合
    var dataoption = [];
    zone.forEach(function (value) {
        if (dataoption.indexOf(value) == -1) {
            dataoption.push(value);
        }
    });

    //下拉式選單匯入子元素option
    for (let i = 0; i < dataoption.length; i++) {
        const str = document.createElement('option');
        str.textContent = dataoption[i];
        optionlist.appendChild(str);
    }

    //監聽區域選項按鈕變更
    optionlist.addEventListener("change", gooption, false);
    //監聽區域按鈕變更
    hotzone.addEventListener("click", goarea, false);

    //change區域選項函式
    function gooption(e) {
        list.innerHTML = "";
        var newdata = [];
        var area = e.target.value;
        var newstr = "";
        var datalen = data.result.records.length
        for (let i = 0; i < datalen; i++) {
            if (data.result.records[i].Zone == area) {
                newdata.push(data.result.records[i].Zone);
                document.querySelector("#text").textContent = data.result.records[i].Zone + newdata.length + "筆";
                newstr += '<div class="spot"><div class="spotbox clearfix"><img class="spotimg" src="' + data.result.records[i].Picture1 + '" alt="' + data.result.records[i].Name + '"><span class="Name">' + data.result.records[i].Name + '</span><span class="Zone">' + data.result.records[i].Zone + '</span><p class="Opentime"><img class="timeicon" src="https://github.com/Hank0725/KH-HTML/blob/master/JavaScript_HomeWork-gh-pages/assets/icons_clock.png?raw=true">' + data.result.records[i].Opentime + '</p><p class="Add"><img class="icon" src="https://github.com/Hank0725/KH-HTML/blob/master/JavaScript_HomeWork-gh-pages/assets/icons_pin.png?raw=true">' + data.result.records[i].Add + '</p><p class="Tel"><img class="icon" src="https://github.com/Hank0725/KH-HTML/blob/master/JavaScript_HomeWork-gh-pages/assets/icons_phone.png?raw=true">' + data.result.records[i].Tel + '</p><span class="Ticketinfo"><img class="icon" src="https://github.com/Hank0725/KH-HTML/blob/master/JavaScript_HomeWork-gh-pages/assets/icons_tag.png?raw=true">' + data.result.records[i].Ticketinfo + '</span></div></div>';

            }
        } list.innerHTML = newstr;
    }
    //熱門區域按鈕函式
    function goarea(e) {
        list.innerHTML = "";
        var newdata = [];
        var area = e.target.value;
        var newstr = "";
        var datalen = data.result.records.length
        for (let i = 0; i < datalen; i++) {
            if (data.result.records[i].Zone == area) {
                newdata.push(data.result.records[i].Zone);
                document.querySelector("#text").textContent = data.result.records[i].Zone + newdata.length + "筆";
                newstr += '<div class="spot"><div class="spotbox clearfix"><img class="spotimg" src="' + data.result.records[i].Picture1 + '" alt="' + data.result.records[i].Name + '"><span class="Name">' + data.result.records[i].Name + '</span><span class="Zone">' + data.result.records[i].Zone + '</span><p class="Opentime"><img class="timeicon" src="https://github.com/Hank0725/KH-HTML/blob/master/JavaScript_HomeWork-gh-pages/assets/icons_clock.png?raw=true">' + data.result.records[i].Opentime + '</p><p class="Add"><img class="icon" src="https://github.com/Hank0725/KH-HTML/blob/master/JavaScript_HomeWork-gh-pages/assets/icons_pin.png?raw=true">' + data.result.records[i].Add + '</p><p class="Tel"><img class="icon" src="https://github.com/Hank0725/KH-HTML/blob/master/JavaScript_HomeWork-gh-pages/assets/icons_phone.png?raw=true">' + data.result.records[i].Tel + '</p><span class="Ticketinfo"><img class="icon" src="https://github.com/Hank0725/KH-HTML/blob/master/JavaScript_HomeWork-gh-pages/assets/icons_tag.png?raw=true">' + data.result.records[i].Ticketinfo + '</span></div></div>';

            }
        } list.innerHTML = newstr;
    }
}

// 回上層按鈕
var back = document.querySelector(".back");
back.addEventListener("click", clicktop, false);
function clicktop() {
    window.scroll(0, 0)
} 