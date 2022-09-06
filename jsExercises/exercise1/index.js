
var greeting="hello ";
let _name="world";
alert(greeting+_name);
   
let greeting_name=greeting+_name;

greeting_name=greeting_name.replace("l","1");
greeting_name=greeting_name.replace("l","1");
greeting_name=greeting_name.replace("l","1");
greeting_name=greeting_name.replace("o","0");
greeting_name=greeting_name.replace("o","0");


function reverseString(str) {
    if (str === "") 
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0);

}

      console.log(reverseString(greeting_name));

