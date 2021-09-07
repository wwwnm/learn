const img1 = document.getElementById("img1");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const fo = document.getElementById("fo");
const ne = document.getElementById("ne");

let img = ["./image/001.jpg" , "./image/002.jpg" , "./image/003.jpg" , "./image/004.jpg" , "./image/005.jpg" , "./image/006.jpg" , "./image/007.jpg" , "./image/008.jpg" , "./image/009.jpg" , "./image/0010.jpg" , "./image/0011.jpg" , "./image/0012.jpg" , "./image/0013.jpg" , "./image/0014.jpg" , "./image/0015.jpg" , "./image/0016.jpg" , "./image/0017.jpg" , "./image/0018.jpg" , "./image/0019.jpg" , "./image/0020.jpg" , "./image/0021.jpg" , "./image/0022.jpg" , "./image/0023.jpg" , "./image/0024.jpg" , "./image/0025.jpg" , "./image/0026.jpg" , "./image/0027.jpg" , "./image/0028.jpg" , "./image/0029.jpg" , "./image/0030.jpg"];

let timer;
let i = 0;

fo.onclick = function(){
    if(i == 0){
        i = img.length - 1;
    }else{
        i--;
    }

    img1.src = img[i];
}

ne.onclick = function(){
    if(i == img.length - 1){
        i = 0;
    }else{
        i++;
    }

    img1.src = img[i];
}


start.onclick = function(){
    clearInterval(timer);

    timer = setInterval(function(){
        i++;
    
        if(i >= img.length){
            i = 0;
        }
    
        img1.src = img[i];
    
    },1000)
    start.disabled = true;
    fo.disabled = true;
    ne.disabled = true;
    stop.disabled = false;
}

stop.onclick = function(){
    clearInterval(timer);
    start.disabled = false;
    fo.disabled = false;
    ne.disabled = false;
    stop.disabled = true;
}