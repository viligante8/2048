document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.getElementById('game-board');
  const gridSize = 4;
  let cells = [];
  let tiles = [];

    const setupGameboard = () => {
      for (let i = 0; i < gridSize ** 2; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gameBoard.appendChild(cell);
        cells.push(cell);
      }
    }
    setupGameboard();

    const generateInitalTiles = (amountOfTilesToGenerate) => {
      for (let i = 0; i < amountOfTilesToGenerate; i++) {
        const x = Math.floor(Math.random() * gridSize);
        const y = Math.floor(Math.random() * gridSize);

        const randomStartingNumber = Math.random() > 0.5 ? 2 : 4;

        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.style.setProperty('--x', x);
        tile.style.setProperty('--y', y);
        // title.style.setProperty('--background-lightness', randomStartingNumber * 100);
        // title.style.setProperty('--text-lightness', randomStartingNumber * 100);

        tile.innerHTML = randomStartingNumber;
        gameBoard.appendChild(tile);
        tiles.push(tile);
      }
    }

    generateInitalTiles(2);
});

// // add event arrow keys to move the tiles
// document.addEventListener('keydown', (event) => {
//   const key = event.keyCode;
//   const direction = key === 37 ? 'left' : key === 38 ? 'up' : key === 39 ? 'right' : key === 40 ? 'down' : null;
//   if (direction) {
//     moveTiles(direction);
//   }
// });

// const moveTiles = (direction) => {
  
// }

