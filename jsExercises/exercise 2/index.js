let ct=new Date();
let ct1=ct.getHours();
let currentTime=(ct1<12)?"Morning":(ct1<18)?"Afternoon":"Evening";
console.log(currentTime);