
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


let canvas =document.getElementById('bol');
function boll(){
  
   let width = 270;
   let height =270;
   
   canvas.setAttribute('width',width);
   canvas.setAttribute('height',height);

   let renderer = new THREE.WebGLRenderer({canvas:canvas});
   renderer.setClearColor(0,000000);

   let scene = new THREE.Scene();

   let camera = new THREE.PerspectiveCamera(45, width / height ,0.1,2000);
   camera.position.set(100,0,1000);

   let light = new THREE.AmbientLight(0xE5FFCC);
   scene.add(light);

   let geometry = new THREE.SphereGeometry(280,10,10);
   let material =new THREE.MeshBasicMaterial({color:0xffffff, vertexColors:THREE.FaceColors});
      for(var i=0;i<geometry.faces.length;i++){
      	geometry.faces[i].color.setRGB(Math.random(),Math.random(),Math.random());
      }

   let mesh =new THREE.Mesh(geometry,material);
     scene.add(mesh);

   function loop(){
   	mesh.rotation.y +=Math.PI / 200;
   	renderer.render(scene,camera);
   	requestAnimationFrame(function(){loop();});
   }
   loop();
}

 /* function bbb(){
      let ctx = canvas.getContext("2d");
      ctx.fillStyle="#FF0000";
      ctx.fillRect(20,20,150,100);
}*/


   
 



