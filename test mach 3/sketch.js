


function setup (){

var x = 1150;
var y = 300;
var width = 50;
var hgt = document.getElementById("income").value;
    
var canvas = document.createElement('canvas');
canvas.style.width='100%';
canvas.style.height='100%';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position='absolute';
canvas.style.left=0;
canvas.style.top=0;
canvas.style.zIndex=100000;
canvas.style.pointerEvents='none'; //Make sure you can click 'through' the canvas
document.body.appendChild(canvas); //Append canvas to body element
var context = canvas.getContext('2d');
context.rect(x, y, width, height);
context.fillStyle = "grey";
context.fill();    
    
}


function myFunction() {
    var x = document.getElementById("income").value;
    var p = document.getElementById("province").value;    
    var cpp = x * 0.05;
    var ei = x * 0.016;
    var gst = x * 0.05;
    var pst = x * 0.15;
    var y = x - (cpp + ei + gst + pst);
    var tt = gst + pst;
    var np = y;


    
    document.getElementById("demo").innerHTML = cpp;
    document.getElementById("demo2").innerHTML = ei;
    document.getElementById("demo3").innerHTML = gst;
    document.getElementById("demo4").innerHTML = pst;
    document.getElementById("demo5").innerHTML = y;
    document.getElementById("demo6").innerHTML = tt;
    document.getElementById("demo7").innerHTML = np;
    document.getElementById("demo8").innerHTML = p;
}
function myFunction2() {
    var x = document.getElementById("income").value;
    var p = document.getElementById("province").value;    
    var bc = 1 + 0.07;
    var ont = x * 0.09;    
    var qc = x * 0.06;
    var ab = x * 0.06;
    var yk = x * 0.06;    
    var ns = x * 0.13;

    document.getElementById("demo9").innerHTML = bc;
    document.getElementById("demo10").innerHTML = ont;
    document.getElementById("demo11").innerHTML = qc;
    document.getElementById("demo12").innerHTML = ab;
    document.getElementById("demo13").innerHTML = yk;
    document.getElementById("demo14").innerHTML = ns;

    
}

