let firstCard = 11;
let secondCard = 10;
let hasBlackJack = false;
let isaAlive = true;
let sum = firstCard + secondCard;
let message = "";
let messageEl= ;
document.getElementById("message-el").textContent = messageEl


function startGame()
{
    if (sum < 21)
    {
        message = "Do you want to draw a new card ? 🙂";
        isaAlive = true;
    }

    else if (sum === 21)
    {
        message = "WoooHooo!! You've got Blackjack!! 🤑🤑";
        hasBlackJack = true;
    }

    else
    {
        message = "You're out of the the game !! 😭😭";
        isaAlive = false;
    }

    messageEl.textContent;
    console.log(messageEl)
}
