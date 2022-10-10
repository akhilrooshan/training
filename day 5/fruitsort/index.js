
let fruit=["apple","orange","apple","orange"]


let red=document.getElementById("appleS")
let ora=document.getElementById("orangeS")


function sortf()
{
    for (let i=0;i<fruit.length;i++)
        {
            if (fruit[i]==="apple")
                {
                    red.textContent+=fruit[i]
                }      
            else if(fruit[i]==="orange")
                {
                    ora.textContent+=fruit[i]
                
                }
        
        }
    
}

sortf()