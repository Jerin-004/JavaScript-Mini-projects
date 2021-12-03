let firstCard = 11;
let secondCard = 10;
let hasBlackJack = false;
let isaAlive = true;
let sum = firstCard + secondCard;
let message = " ";

if (sum < 21)
{
    console.log("Do you want to draw a new card ? 🙂");
    isaAlive = true;
}

else if (sum === 21)
{
    console.log("WoooHooo!! You've got Blackjack!! 🤑🤑");
    hasBlackJack = true;
}

else
{
    console.log("You're out of the the game !! 😭😭");
    isaAlive = false;
}

message = "We're logging out";