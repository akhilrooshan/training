
function capitalize(str)
{
const upper = str.map(element => {
  return element.toUpperCase();
});

return upper;
}



const arr=["aRa","Mds"];
console.log(capitalize(arr));