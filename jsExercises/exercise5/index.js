var toppings = ['Cheese', 'Ham', 'Bits', 'Tomatoes'];


function makePizza(a){


    let inc=a[0];
    
   
    for (let i=1;i<a.length;i++)
    {
        inc=inc+" and "+a[i];
    }

    return "A tasty pizza with "+inc;
    //A tasty pizza with Cheese and Ham and Bits and Tomatoes


};

console.log(makePizza(toppings));