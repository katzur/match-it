/* jshint esversion: 8 */

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let time = 100;
let score = 1;


// timer
function countDown() {
    timer.innerHTML = time;
    if (score < 10 && time > 0) {
        (time = time - 1)
    } else if (time === 0) {
        // overlay text at the end of the game if time runs out
        let popUp = document.getElementById('game-over-text');
        popUp.classList.add('visible');
        time = 0;
    }
    // overlay text at the end of the game if player matches all the cards
    else {
        let popUp = document.getElementById('victory-text');
        popUp.classList.add('visible');
    }
}
setInterval("countDown()", 1000);

// flipping cards
function flipCard() {
    if (lockBoard) return;
    //double click on one card won't consider it as a match
    if (this === firstCard) return;

    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        // first time player clicks a card
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // second time player clicks a card
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();
    }
}

// matching the cards general rule
function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        matchCards();
        // score increase
        pairs.innerHTML = score;
        score = score + 1;
        // victory pop up text at the end of the game
        if (score === 10) {
            let popUp = document.getElementById('victory-text');
            popUp.classList.add('visible');
        }

    } else {
        unflipCards();
    }
}

//keeping cards face up after matching them
function matchCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

//when cards don't match - flip back after a 1.1 second
function unflipCards() {
    //locking the board to avoid game bug based on additional clicks before 1.1sec
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1100);
}

// after uncovering first two cards it allows the player to uncover next ones
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//shuffling the cards on load
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 18);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));