let player={
    name:"akhil",
    chips:145
}
let playerId=document.getElementById("player")
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let message1=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
playerId.textContent=player.name +" $ " +player.chips

function start(){
    isAlive=true
    let firstCard=getRandom()
    let secondCard=getRandom()
    cards=[firstCard,secondCard]
     sum=firstCard+secondCard
    renderGame()
}

function renderGame()
{
    for (let i=0;i<cards.length;i+=1)
        {
            cardsEl.textContent+=cards[i]+" "
            cardsEl.innerHTML=cards
        }
    
    
    sumEl.textContent="Sum : " +sum
    if (sum<=20)
        {
            alert("Do you want to draw a new card ? ")
            
        }else if(sum===20)
            {
                alert("You have Won the jackpot")
                
                hasBlackJack=true
            }else
                {
                    alert("game over")
                    isAlive=false
                    
                }
}

function newCard(){
    if(isAlive===true && hasBlackJack===false)
        {
            
        
    let card=getRandom()
    sum+=card
    cards.push(card)
    renderGame()
        }else
            {
                alert("you cant draw more cards")
            }
    
}

function getRandom(){
    
    let x= Math.floor(Math.random()*13)+1
    if (x===1)
        {
            return 11
        }
    else if(x>10)
        {
            return 10
        }
    else
        return x
}