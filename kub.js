
window.onload = a;

function a(){
/*  boll()*/
	colorKub()
  image()
}

let side =document.querySelectorAll('.side');
let kub =document.querySelectorAll('.kub');
let img =document.querySelector('.fot');
let imgD =document.getElementsByTagName('img');
let input =document.getElementsByTagName('input');

function color(){
   let r = Math.floor(Math.random()*255);
   let g = Math.floor(Math.random()*255);
   let b = Math.floor(Math.random()*255);
   return`rgb(${r} , ${g} , ${b})`;
}

function colorKub(){
	for(i=0; i<input.length; i++){
       input[i].style.backgroundColor=`${color()}`;
	}
}

let ran ;
let f;
let imgArr=["f-1.jpg", "f-2.jpg", "f-3.jpg"];

function image() {
    setInterval(function(){
      for ( f=0; f<imgD.length; f++){
       ran =Math.floor(Math.random()*imgArr.length);
       imgD[f].src=imgArr[ran];

        if(f==1 | f==4){
         imgD[f].classList.add("fot1");
       }
        else{
         imgD[f].classList.add("anima");
      }
    }

  },1200);
}


function insert(num){
	document.form.textview.value += num;
	if ( document.querySelector(".item").value.length > 6){
	     document.form.textview.value ="ну куда стока?";
   }
}
function clean(){
	document.form.textview.value='';
}
function back(){
	let int = document.form.textview.value;
	   document.form.textview.value=int.substring(0,int.length -1);
}

function result(){
  let int = document.form.textview.value;
	if(eval(int) == Infinity){
		document.form.textview.value = eval(int);
		document.form.textview.value ="ты дурак ?";
	}
	else if(int){
	    document.form.textview.value = Math.round(eval(int));
	}
}

////////////БЛОКИ с Классами///////////////

let blok = document.querySelector('.blok');
let blokDiv = blok.getElementsByTagName('div');


function colorKub(){
  for(i=0; i<blokDiv.length; i++){
       blokDiv[i].style.backgroundColor=`${color()}`;
  }
}





 console.log(blokDiv);


