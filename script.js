// script.js
document.querySelector('.pokeball').addEventListener('click', function() {
    this.classList.toggle('open');
  });
  
  // Variabile per il numero e il DOM
let counterValue = 0;
const counterDisplay = document.getElementById('counter');
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');

// Funzione per aggiornare il numero e la sua dimensione
function updateCounter() {
  counterDisplay.textContent = counterValue;
  
  // Aumenta o diminuisci la dimensione del numero
  const scale = 1 + Math.abs(counterValue) * 0.05; // Scala crescente
  counterDisplay.style.transform = `scale(${scale})`;
}

// Aggiungi eventi per i bottoni
decreaseButton.addEventListener('click', function() {
  counterValue--;
  updateCounter();
});

increaseButton.addEventListener('click', function() {
  counterValue++;
  updateCounter();
});

// Inizializza la visualizzazione
updateCounter();
