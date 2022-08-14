import Grid from './Grid.js';
import Tile from './Tile.js';

const gameBoard = document.getElementById('game-board');

const grid = new Grid(gameBoard);


grid.randomEmptyCell().tile = new Tile(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);

const handleInput = (event) => {
  const key = event.key;
  console.log(key);
  switch(key) {
    case 'ArrowLeft':
      moveLeft();
      break;
    case 'ArrowUp':
      moveUp();
      break;
    case 'ArrowRight':
      moveRight();
      break;
    case 'ArrowDown':
      moveDown();
      break;
    default:
      setupInput();
      break;
  }
  setupInput();
}

const setupInput = () => {
  window.addEventListener('keydown', handleInput, { once: true });
}

setupInput();

const moveUp = () => {
  return slideTiles(grid.cellsByColumn)
}

const moveDown= () => {
  return slideTiles(grid.cellsByColumn)
}

const moveLeft = () => {
  return slideTiles(grid.cellsByRow)
}

const moveRight = () => {
  return slideTiles(grid.cellsByRow)
}

const slideTiles = (cells) => {
  
}

