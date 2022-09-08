

function englishToPIgLatin(str)
{

    str=str.toLowerCase();
    const arr=str.split(" ");
    let newArr=" ";
    for (let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr[i].length;j++)
        {
            let m=arr[i].charAt(0);
            
            let n=arr[i].substring(1);
            var o=n+m+"ay";
          
             

        }
        newArr=newArr+" "+o;
      
    }
    return newArr;

}

function pigLatinToEnglish(str)
{
    str=str.toLowerCase();
    const arr=str.split(" ");
    let newArr=" ";
    for (let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr[i].length;j++)
        {
            var o=arr[i].slice(0,-2);
          
            let m=o.slice(-1);
         
            let n=o.slice(0,-1)
            var p=m+n;
          
             

        }
        newArr=newArr+" "+p;
      
    }
    return newArr;

}

arrY="The quick brown fox";
yArr="hetay uickqay rownbay oxfay";
console.log(englishToPIgLatin(arrY));
console.log(pigLatinToEnglish(yArr));
