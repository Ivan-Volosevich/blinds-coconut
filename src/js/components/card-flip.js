const cards = document.querySelectorAll('.memo-card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});

// cards.forEach(card => card.addEventListener('click', flipCard));