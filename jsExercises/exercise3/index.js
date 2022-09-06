function sandwichCalculator(bread,cheese)
{
    let BavailS=Math.floor(bread/2);
    if(BavailS>cheese)
    {
        let sandwich=cheese;
        return sandwich;

    }else
    {
        let sandwich=BavailS;
        return sandwich;
    }
}


console.log(sandwichCalculator(10,5));