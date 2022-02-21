const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// flipping cards
function flipCard() {
    if (lockBoard) return;
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        // first time player clicks a card
        hasFlippedCard = true;
        firstCard = this;   
    }   else {
        // second time player clicks a card
        hasFlippedCard = false;
        secondCard = this;

        // identifying type of card
        console.log(firstCard.dataset.framework);
        console.log(secondCard.dataset.framework);

        checkForMatch();
    }
}

// matching the cards general rule
function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        matchCards();
    } else {
        unflipCards();
    }
}

//when cards match
function matchCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

//when cards don't match - flip back after a 1.1 second
function unflipCards(){
    //locking the board to avoid game bug based on additional clicks before 1.1s
    lockBoard = true;

    setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    lockBoard = false;
    }, 1100);
}


cards.forEach(card => card.addEventListener('click', flipCard));


