function resetGame(){
    location.reload();
    box1='';
    box2='';
    box3='';
    box4='';
    box5='';
    box6='';
    box7='';
    box8='';
    box9='';
}
function isMatching(){

var box1,box2,box3,box4,box5,box6,box7,box8,box9;
box1=document.getElementById("box1").value;
box2=document.getElementById("box2").value;
box3=document.getElementById("box3").value;
box4=document.getElementById("box4").value;
box5=document.getElementById("box5").value;
box6=document.getElementById("box6").value;
box7=document.getElementById("box7").value;
box8=document.getElementById("box8").value;
box9=document.getElementById("box9").value;


    if ( box1 === 'S' && box2 === 'S' &&  box3 === 'S') {
        document.getElementById("show").innerHTML="Hurray.We got a 3S in a row.Player S won";
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
         window.alert('Hurray.We got a 3S in a row.Player S won');
    }
    else if ( box1 === 'S' && box4 === 'S' &&  box7 === 'S') {
        document.getElementById("show").innerHTML="Hurray.We got a 3S in a row.Player S won";
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
 
         window.alert('Hurray.We got a 3S in a row.Player S won');
    }
    else if ( box7 === 'S' && box8 === 'S' &&  box9 === 'S') {
        document.getElementById("show").innerHTML="Hurray.We got a 3S in a row.Player S won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
         window.alert('Hurray.We got a 3S in a row.Player S won');
    }
    else if ( box3 === 'S' && box6 === 'S' &&  box9 === 'S') {
        document.getElementById("show").innerHTML="Hurray.We got a 3S in a row.Player S won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
         window.alert('Hurray.We got a 3S in a row.Player S won');
    }
    else if ( box1 === 'S' && box5 === 'S' &&  box9 === 'S') {
        document.getElementById('show').innerHTML="Hurray.We got a 3S in a row.Player S won";
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
         window.alert('Hurray.We got a 3S in a row.Player S won');
    }
    else if ( box3 === 'S' && box5 === 'S' &&  box7 === 'S') {
        document.getElementById('show').innerHTML="Hurray.We got a 3S in a row.Player S won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
         window.alert('Hurray.We got a 3S in a row.Player S won');
    }
    else if ( box2 === 'S' && box5 === 'S' &&  box8 === 'S') {
        document.getElementById('show').innerHTML="Hurray.We got a 3S in a row.Player S won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box9").disabled = true;
         window.alert('Hurray.We got a 3S in a row.Player S won');
    }
    else if ( box4 === 'S' && box5 === 'S' &&  box6 === 'S') {
        document.getElementById("show").innerHTML="Hurray.We got a 3S in a row.Player S won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
         window.alert('Hurray.We got a 3S in a row.Player S won');
    }
    else if ( box1 === '0' && box2 === '0' &&  box3 === '0') {
        document.getElementById("show").innerHTML="Hurray.We got a 3 0 in a row.Player S won";
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
         window.alert('Hurray.We got a 3 0 in a row.Player S won');
    }
    else if ( box1 === '0' && box4 === '0' &&  box7 === '0') {
        document.getElementById('show').innerHTML="Hurray.We got a 3 0 in a row.Player S won";
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
         window.alert('Hurray.We got a 3 0 in a row.Player S won');
    }
    else if ( box7 === '0' && box8 === '0' &&  box9 === '0') {
        document.getElementById('show').innerHTML="Hurray.We got a 3 0 in a row.Player S won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
         window.alert('Hurray.We got a 3 0 in a row.Player S won');
    }
    else if ( box3 === '0' && box6 === '0' &&  box9 === '0') {
        document.getElementById('show').innerHTML="Hurray.We got a 3 0 in a row.Player S won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
         window.alert('Hurray.We got a 3 0 in a row.Player S won');
    }
    else if ( box1 === '0' && box5 === '0' &&  box9 === '0') {
        document.getElementById('show').innerHTML="Hurray.We got a 3 0 in a row.Player S won";
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
         window.alert('Hurray.We got a 3 0 in a row.Player S won');
    }
    else if ( box3 === '0' && box5 === '0' &&  box7 === '0') {
        document.getElementById('show').innerHTML="Hurray.We got a 3 0 in a row.Player S won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
         window.alert('Hurray.We got a 3 0 in a row.Player S won');
    }
    else if ( box2 === '0' && box5 === '0' &&  box8 === '0') {
        document.getElementById('show').innerHTML="Hurray.We got a 3 0 in a row.Player 0 won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box9").disabled = true;
         window.alert('Hurray.We got a 3 0 in a row.Player S won');
    }
    else if ( box4 === '0' && box5 === '0' &&  box6 === '0') {
        document.getElementById('show').innerHTML="Hurray.We got a 3 0 in a row.Player S won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
         window.alert('Hurray.We got a 3 0 in a row.Player S won');
    }
 
   
    else if ((box1 == 'S' || box1 == '0') && 
        (box2 == 'S'|| box2 == '0') && 
        (box3 == 'S' || box3 == '0') &&
        (box4 == 'S' || box4 == '0') && 
        (box5 == 'S' || box5 == '0') && 
        (box6 == 'S' || box6 == '0') &&
        (box7 == 'S' || box7 == '0') && 
        (box8 == 'S' || box8 == '0') && 
        (box9 == 'S' || box9 == '0')) {
            document.getElementById('show').innerHTML="Match Tie";
             alert('Match Tie');
    }
    else {
 
    
        if (flag == 1) {
            document.getElementById('show').innerHTML="Player 1 Turn";
        }
        else {
            document.getElementById('show').innerHTML="Player 2 Turn";
        }
    }
    
}
 var flag=1;
function bttnDisable1() {
    if (flag == 1) {
        document.getElementById("box1").value="S";
        document.getElementById("box1").disabled=true;
        flag = 0;
    }
    else {
        document.getElementById("box1").value="0";
        document.getElementById("box1").disabled=true;
        flag = 1;
    }
}
 
function bttnDisable2() {
    if (flag == 1) {
        document.getElementById("box2").value="S";
        document.getElementById("box2").disabled=true;
        flag = 0;
    }
    else {
        document.getElementById("box2").value="0";
        document.getElementById("box2").disabled=true;
        flag = 1;
    }
}
 
function bttnDisable3() {
    if (flag == 1) {
        document.getElementById("box3").value="S";
        document.getElementById("box3").disabled=true;
        flag = 0;
    }
    else {
        document.getElementById("box3").value="0";
        document.getElementById("box3").disabled=true;
        flag = 1;
    }
}
 
function bttnDisable4() {
    if (flag == 1) {
        document.getElementById("box4").value="S";
        document.getElementById("box4").disabled=true;
        flag = 0;
    }
    else {
        document.getElementById("box4").value="0";
        document.getElementById("box4").disabled=true;
        flag = 1;
    }
}
 
function bttnDisable5() {
    if (flag == 1) {
        document.getElementById("box5").value="S";
        document.getElementById("box5").disabled=true;
        flag = 0;
    }
    else {
        document.getElementById("box5").value="0";
        document.getElementById("box5").disabled=true;
        flag = 1;
    }
}
 
function bttnDisable6() {
    if (flag == 1) {
        document.getElementById("box6").value="S";
        document.getElementById("box6").disabled=true;
        flag = 0;
    }
    else {
        document.getElementById("box6").value="0";
        document.getElementById("box6").disabled=true;
        flag = 1;
    }
}
 
function bttnDisable7() {
    if (flag == 1) {
        document.getElementById("box7").value="S";
        document.getElementById("box7").disabled=true;
        flag = 0;
    }
    else {
        document.getElementById("box7").value="0";
        document.getElementById("box7").disabled=true;
        flag = 1;
    }
}
 
function bttnDisable8() {
    if (flag == 1) {
        document.getElementById("box8").value="S";
        document.getElementById("box8").disabled=true;
        flag = 0;
    }
    else {
        document.getElementById("box8").value="0";
        document.getElementById("box8").disabled=true;
        flag = 1;
    }
}
 
function bttnDisable9() {
    if (flag == 1) {
        document.getElementById("box9").value="S";
        document.getElementById("box9").disabled=true;
        flag = 0;
    }
    else {
        document.getElementById("box9").value="0";
        document.getElementById("box9").disabled=true;
        flag = 1;
    }
}