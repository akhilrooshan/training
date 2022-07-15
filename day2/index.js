
let countIn=document.getElementById("count")
let count=0
function increment()
{
    count+=1
    console.log(count)
    countIn.innerText=count
}

function decrement()
{
    count-=1
    console.log(count)
    countIn.innerText=count
}