
let myLeads=[]
let unord=document.getElementById("ulEl")
const name=document.getElementById("content")
const inpBttn=document.getElementById("bttn1")
inpBttn.addEventListener("click",function(){
    
    myLeads.push(name.value)
    console.log(myLeads)
    for (let i=0;i< myLeads.length;i++)
{
    unord.innerHTML+="<li>"+myLeads[i]+"</li>"
    console.log(unord)
}
})
