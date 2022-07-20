window.onresize=screen;
window.onload =screen;


function screen(){
    myWidth=window.innerWidth;
    myHeoght=window.innerHeight;
    document.getElementById("size").innerHTML="Width : " + myWidth +"px" +" " +"Height : "+myHeoght +" px";
}

