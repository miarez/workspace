


function setup (){
    
}


function myFunction() {
    var x = document.getElementById("income").value;
    var cpp = x * 0.05;
    var ei = x * 0.016;
    var gst = x * 0.05;
    var pst = x * 0.15;
    var y = x - (cpp + ei + gst + pst);
    var tt = gst + pst;
    var np = y;
    var bc = x * 0.00012;
    
    document.getElementById("demo").innerHTML = cpp;
    document.getElementById("demo2").innerHTML = ei;
    document.getElementById("demo3").innerHTML = gst;
    document.getElementById("demo4").innerHTML = pst;
    document.getElementById("demo5").innerHTML = y;
    document.getElementById("demo6").innerHTML = tt;
    document.getElementById("demo7").innerHTML = np;
    document.getElementById("demo8").innerHTML = bc;
    document.getElementById("demo8").innerHTML = bc;

   
}



