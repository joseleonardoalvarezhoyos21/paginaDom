let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let blackBtn = document.getElementById("black");
let imgchange = document.getElementById("imgchange");


redBtn.onclick = function () {

    imgchange.src = "./images/arkana_red_md.jpg";
}

blueBtn.onclick = function () {
    imgchange.src = "./images/arkana_blue_md.jpg";
}

blackBtn.onclick = function () {
    imgchange.src = "./images/arkana_black_md.jpg";
}




