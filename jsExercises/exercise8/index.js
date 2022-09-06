

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
}

arrY="The quick brown fox";

console.log(englishToPIgLatin(arrY));