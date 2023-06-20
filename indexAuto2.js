let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let blackBtn = document.getElementById("black");
let imgchange = document.getElementById("imgchange");
let imgchange2 = document.getElementById("imgchange2");



if(imgchange==imgchange){
    redBtn.onclick = function() {

        imgchange.src = "./images/arkana_red_md.jpg";
    }
    
    blueBtn.onclick = function() {
        imgchange.src = "./images/arkana_blue_md.jpg";
    }
    
    blackBtn.onclick = function() {
        imgchange.src = "./images/arkana_black_md.jpg";
    }

}else if(imgchange2==imgchange2){
    redBtn.onclick = function() {

        imgchange2.src = "./images/arkana_red_md.jpg";
    }
    
    blueBtn.onclick = function() {
        imgchange2.src = "./images/arkana_blue_md.jpg";
    }
    
    blackBtn.onclick = function() {
        imgchange2.src = "./images/arkana_black_md.jpg";
    }
}else{
    alert("No existe el producto");
}
