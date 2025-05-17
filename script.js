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


function showProject(proj) {
  const projects = {
    colorPicker: `
      <h2>🎨 Color Picker</h2>
      <input type="color" id="picker">
      <p id="colorValue"></p>
      <script>
        document.getElementById('picker').oninput = function() {
          document.body.style.background = this.value;
          document.getElementById('colorValue').textContent = 'Colore: ' + this.value;
        };
      </script>
    `,

    clock: `
      <h2>🕰️ Orologio</h2>
      <div id="clock" style="font-size:3rem"></div>
    `,

    dice: `
      <h2>🎲 Lancio Dado</h2>
      <div id="dice" style="font-size:5rem">🎲</div>
      <button onclick="document.getElementById('dice').textContent = Math.floor(Math.random()*6)+1">Lancia</button>
    `,

    todo: `
      <h2>📋 To-Do List</h2>
      <input id="taskInput" placeholder="Nuovo compito">
      <button onclick="addTask()">Aggiungi</button>
      <ul id="taskList"></ul>
    `,

    calc: `
      <h2>🔢 Calcolatrice</h2>
      <input id="n1" type="number"> 
      <input id="n2" type="number">
      <div>
        <button onclick="calc('+')">+</button>
        <button onclick="calc('-')">-</button>
        <button onclick="calc('*')">×</button>
        <button onclick="calc('/')">÷</button>
      </div>
      <h3 id="result"></h3>
    `,

    modal: `
      <h2>📦 Modal</h2>
      <button onclick="openModal()">Apri Modal</button>
      <div id="modal" class="modal">
        <div class="modal-content">
          <p>Questa è una modale!</p>
          <button onclick="closeModal()">Chiudi</button>
        </div>
      </div>
    `,

    countdown: `
      <h2>📅 Countdown</h2>
      <input id="seconds" type="number" placeholder="Secondi">
      <button onclick="startCountdown()">Avvia</button>
      <div id="timer" style="font-size:2rem; margin-top:10px"></div>
    `
  };

  document.getElementById('projects').innerHTML = projects[proj] || '';

  // Inizializza funzioni dove serve
  if (proj === 'clock') {
    setInterval(() => {
      document.getElementById('clock').textContent = new Date().toLocaleTimeString();
    }, 1000);
  }
}

function addTask() {
  const input = document.getElementById('taskInput');
  if (input.value) {
    const li = document.createElement('li');
    li.textContent = input.value;
    li.onclick = () => li.classList.toggle('completed');
    li.ondblclick = () => li.remove();
    document.getElementById('taskList').appendChild(li);
    input.value = '';
  }
}

function calc(op) {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);
  let res;
  if (op === '+') res = n1 + n2;
  if (op === '-') res = n1 - n2;
  if (op === '*') res = n1 * n2;
  if (op === '/') res = n1 / n2;
  document.getElementById('result').textContent = 'Risultato: ' + res;
}

function openModal() {
  document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function startCountdown() {
  let time = parseInt(document.getElementById('seconds').value);
  const timer = document.getElementById('timer');
  const interval = setInterval(() => {
    timer.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(interval);
      timer.textContent = 'Fine!';
    }
  }, 1000);
}
