const cards = document.querySelectorAll('.memory-card');

// flipping cards
function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));
