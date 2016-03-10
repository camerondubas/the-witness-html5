import './style.css';
import Game from './utils/game';
import GridPuzzle from './puzzle-types/grid-puzzle';

let puzzleTypes = {GridPuzzle};

var theWitness = new Game(puzzleTypes);

function gameLoop() {
    setTimeout(() => {
      // Clear Screen
      theWitness.context.clearRect(0, 0, theWitness.canvas.width, theWitness.canvas.height);

      requestAnimationFrame(gameLoop);

      // Draw Game Elements
      theWitness.drawPanel();
      theWitness.drawPuzzle();
      theWitness.drawGrid();
      theWitness.drawPuzzleBoundingBox();


    }, theWitness.config.refreshInterval);
};

gameLoop();
