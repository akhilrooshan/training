arr=[2,3,4,5,6,6,4,3,2]
const ten=function(mar)
{
   return mar*10;
}
let myArr=arr.map(ten)

console.log(myArr)


const arr=[5,1,3,2,6,2,8,2];
const double=(a)=>a*2;
const triple=(a)=>a*3;
const binary=(a)=>a.toString(2);
console.log(arr.map(double))
console.log(arr.map(binary))
const max=arr.reduce((arr,curr)=>{
 if(curr>arr)  
 {
    arr=curr;
 } 
 return arr;
},0);

const sum=arr.reduce((acc,curr)=>{
    acc+=curr;
    return acc;
},0)
console.log(sum)
const output=(arr.filter((m)=>m>1))
console.log(output)

const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone" , age: 26 },
    ];


let firstBelow=users.reduce((arr,curr)=>{

    if(curr.age<30)
    {
        arr.push(curr.firstName);
    }
    return arr
},[])
console.log(firstBelow)


    console.log (users.filter(x=>{
        if(x.age===26)
        {
            return x.firstName;
        }
    }).map(x=>{
        return x.firstName+" "+x.lastName
    }))





    const count=users.reduce((acc,curr)=>
    {
    if(acc[curr.age])
    {
         acc[curr.age]+=1
        }else{
        acc[curr.age]=1
    }
    return acc;
    },{})

    console.log(count)


const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const categories = companies.reduce((acc, curr) => {
    if (acc.includes(curr.category)) {
    }
    else {
        acc.push(curr.category);

    } return acc
}, [])


console.log(categories)



    console.log(companies.filter(x=>{
        if(x.category==="Retail" && x.start===1981)
        {
            return x.name;

    }}
    ));



  const lastedTen=companies.filter(x=>{
    if((x.end - x.start)>=10)
    {
        return true;
    }
  })

  console.log(lastedTen)