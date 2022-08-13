document.addEventListener('DOMContentLoaded', () => {
  const gameGrid = document.querySelector('.grid');
  const scoreValue = document.querySelector('#score');
  const gridSize = 4;
  let squares = [];

    const setupGrid = () => {
      for (let i = 0; i < gridSize ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        gameGrid.appendChild(square);
        squares.push(square);
      }
    }
    setupGrid();

    const generateInitalNumbers = (amountOfNumbersToGenerate) => {
      for (let i = 0; i < amountOfNumbersToGenerate; i++) {
        const randomIndex = Math.floor(Math.random() * squares.length);
        const randomStartingNumber = Math.random() > 0.5 ? 2 : 4;
        squares[randomIndex].innerHTML = randomStartingNumber;
      }
    }

    generateInitalNumbers(2);
});

// add event arrow keys to move the tiles
document.addEventListener('keydown', (event) => {
  const key = event.keyCode;
  const direction = key === 37 ? 'left' : key === 38 ? 'up' : key === 39 ? 'right' : key === 40 ? 'down' : null;
  if (direction) {
    moveTiles(direction);
  }
});

const moveTiles = (direction) => {
  
}

