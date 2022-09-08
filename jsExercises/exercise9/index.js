function largestNearest(arr,n)
{
    var num=n-1;
    var number=arr[n-1];


    var pos="";
    var values="";
    var finPos="";
    arrC=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>number)
        {
            pos=pos+i;
          
        }
        

    }
    for(let i=0;i<pos.length;i++)
    {
       values=pos[i]-num;
        arrC.push(Math.abs(values));

    }
    var low=Math.min(...arrC);
    var neg=0-low;
   

   
    if (arr[low]>arr[num-neg])
    {
        finPos=num-low;

       
    }else{
        
        finPos=low+num;
    }
   


    return "Largest near number " +arr[finPos];
    

}
let newArr=[1,4,3,2,5,7];
console.log(largestNearest(newArr,5));