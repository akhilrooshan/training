
var greeting="hello ";
let _name="world";
//alert(greeting+_name);
   
let greeting_name=greeting+_name;

greeting_name=greeting_name.replace(/l/g,"1");


greeting_name=greeting_name.replace(/o/g,"0");

let regex = /.{1,1}/ig

let result = greeting_name.match(regex);
let reversed = result.reverse().join("");

console.log(reversed);