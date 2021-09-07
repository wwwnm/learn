let fix = document.getElementsByClassName("fix");
let table = document.getElementsByClassName("table")[0];
const prev = table.getElementsByTagName("tr");
let add = document.getElementById("add");
let old = document.getElementById("old");
let news = document.getElementById("news");
add.onclick = function(){
    try {
        console.log(fix.length+ ","+ prev[2].getElementsByTagName("td")[4].innerHTML);

        //獲取信息
        let old = document.getElementById("old").value;
        let news = document.getElementById("news").value;
        let fl = fix.length;
        let allPrev = prev[fl].getElementsByTagName("td")[4].innerHTML;
        let all_x = Number(allPrev);
        let news_old = news-old;
        let all = all_x+news_old;
        console.log(typeof all_x);
        //創建元素
        let tr_new = document.createElement("tr");
        let times = document.createElement("td");
        let old_s = document.createElement("td");
        let news_s = document.createElement("td");
        let add_s = document.createElement("td");
        let all_s = document.createElement("td");
        let btnPlc = document.createElement("td");
        let btn = document.createElement("button");

        let timesText = document.createTextNode(fix.length+1);
        let oldText = document.createTextNode(old);
        let newsText = document.createTextNode(news);
        let addText = document.createTextNode(news-old);
        let allText = document.createTextNode(all);
        let btnText = document.createTextNode("去除");

        times.appendChild(timesText);
        old_s.appendChild(oldText);
        news_s.appendChild(newsText);
        add_s.appendChild(addText);
        all_s.appendChild(allText);
        btn.appendChild(btnText);
        btnPlc.appendChild(btn);

        btn.className = "fix";

        btn.onclick = function () {
            if(confirm("是否確認刪除？")){
                let table0 = this.parentNode.parentNode;
                table0.parentNode.removeChild(table0);
            }else{
                console.log("取消");
            }
        }

        tr_new.appendChild(times);
        tr_new.appendChild(old_s);
        tr_new.appendChild(news_s);
        tr_new.appendChild(add_s);
        tr_new.appendChild(all_s);
        tr_new.appendChild(btnPlc);

        let tbody = table.getElementsByTagName("tbody")[0];

        tbody.appendChild(tr_new);

    } catch (e) {
        console.log(e)
    }
}
for (let i = 0; i < fix.length; i++) {
    fix[i].onclick = function () {
        if(confirm("是否確認刪除？")){
            let table0 = this.parentNode.parentNode;
            table0.parentNode.removeChild(table0);
        }else{
            console.log("取消");
        }
    }
};

let Hi = document.getElementById("Hi");
let Th = document.getElementsByTagName("th")[0];
Hi.onclick = function () {
    let A = document.getElementById("Hi");
    let B = getComputedStyle(A,null);
    console.log(B.width);
}