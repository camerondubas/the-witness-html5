import './style.css';
import Game from './utils/game';

var theWitness = new Game();

function gameLoop() {
    setTimeout(() => {
      // Clear Screen
      theWitness.context.clearRect(0, 0, theWitness.canvas.width, theWitness.canvas.height);

      requestAnimationFrame(gameLoop);

      // Draw Game Elements
      theWitness.drawPanel();
      theWitness.drawPuzzle();


    }, theWitness.config.refreshInterval);
};

gameLoop();
