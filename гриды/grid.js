
window.onload =  a;

 function a() {
    color()
    color2();
  }

let box = document.querySelectorAll(".box");
let item = document.querySelectorAll(".item");

function getColor(){
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);
  return `rgb( ${r} , ${g} , ${b})`;
}

function color(){
  for (i = 0; i < box.length; i++){
	box[i].style.backgroundColor= `${getColor()}`;
    }
}

function color2(){
	for(j = 0 ; j<item.length; j++){
		item[j].style.backgroundColor=`${getColor()}`;
	}
}
