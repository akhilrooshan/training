let countIn=document.getElementById("count")
let count=0
function increment()
{
    count+=1
    countIn.innerHTML=count
}

function decrement()
{
    count-=1
    console.log(count)
    countIn.innerHTML=count
}


let saveV=document.getElementById("saVal")

function save()
{
    let countStr=count+" ,  "
    saveV.innerText+=countStr
        console.log(saveV)
        
    
    
    
    count=0
    countIn.innerHTML=count
    
    
}


