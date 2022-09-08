function multiply (array) {
    var sum=1;
    for (var i=0; i<array.length; i++) {
        sum = sum * array[i];
    } 
    return sum;
}

var times=0;
function persistance(num)
{

    var arrOfStr = Array.from(String(num));
    
    var arrOfNum = arrOfStr.map(str => Number(str));
    
    if(arrOfNum.length>1)
    {

        arrOfStr=multiply(arrOfNum);
        console.log(arrOfStr);
    
        times++;
        persistance(arrOfStr,times);
        
        
    }
    return "multiplicative persisitance = " +times ;



}



console.log(persistance(125324,times));