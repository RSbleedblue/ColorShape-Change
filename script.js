const color_changer = document.getElementById("color_changer");
const triangle = document.getElementById("triangle");
const square = document.getElementById("square");
var clickColor = 0;

function changeColor(){
    if(clickColor == 0){
        color_changer.style.backgroundColor = "blue";
        clickColor++; 
    } else if(clickColor == 1){
        color_changer.style.backgroundColor = "green";
        clickColor++;
    } else if(clickColor == 2){
        color_changer.style.backgroundColor = "orange";
        clickColor++;
    } else {
        color_changer.style.backgroundColor = "red";
        clickColor = 0;
    }
}

var isTriangle = false;

function changeShape() {
    if (!isTriangle) {
      var i = document.getElementsByClassName("square")[0];
      i.className = "triangle";
      isTriangle = true;
    }else{
      var i = document.getElementsByClassName("triangle")[0];
      i.className = "square";
      isTriangle = false;
    }
  }
