
let cards = []  //array
let hasBlackJack = false;
let isaAlive = false;
let sum = 0;
let message = "";


let player = {   // creating a object
    name: "Jerin",
    chips: 145,
    sayHello: function() {  // methods that are inside an object
        console.log("Jerin!!")
    }
}

player.sayHello()

document.querySelector("#player-el").textContent = player.name + ": $" + player.chips

function getRandomCard() {

    if (Math.floor((Math.random() * 13) + 1) == 1) {
        return 11
    }

    else if (Math.floor((Math.random() * 13) + 1) > 10) {
        return 10
    }

    else {
        return Math.floor((Math.random() * 13) + 1);  
    }
}

function startGame() {
    isaAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    document.querySelector("#cards-el").textContent = "Cards: "
    for (let index = 0; index < cards.length; index++) {   
        document.querySelector("#cards-el").textContent += cards[index] + ", " ;
    }
    
    document.querySelector("#sum-el").textContent = "Sum: " + sum
    if (sum < 21){
        message = "Do you want to draw a new card ?";
    }

    else if (sum === 21){     //doing === checks for the data type also
        message = "You've got Blackjack!!";
        hasBlackJack = true;
    }

    else{
        message = "You're out of the the game !!";
        isaAlive = false;
    }

    document.getElementById("message-el").textContent = message;
}

function newCard() {

    if (isaAlive === true && hasBlackJack === false) {
        let anotherCard = getRandomCard();
        cards.push(anotherCard)
        sum += anotherCard;
        renderGame();
    }
    
}


// let hands = ["rock", "paper", "scissor"]

// function randomiser() {
//     let i =  Math.floor(Math.random() * 3)
//     console.log(hands[i])
// }

// randomiser()