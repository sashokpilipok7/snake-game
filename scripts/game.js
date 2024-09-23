import Snake from './snake.js';
import Food from './food.js'
import { setupGUI, updateScore } from './gui.js';

class Game {
    constructor() {
        this.app = new PIXI.Application({ width: 400, height: 400 });
        console.log(this.app.view); 
        document.body.appendChild(this.app.view);
        
        this.snake = new Snake();
        this.food = new Food();
        
        this.currentScore = 0;
        this.bestScore = 0;
        this.isGameRunning = false;
        
        this.setupControls();
        this.setupGUI();
    }

    startGame() {
        this.isGameRunning = true;
        this.currentScore = 0;
        this.snake.reset();
        this.food.spawn();

        this.app.ticker.add(() => this.update());
    }

    update() {
        this.snake.move();
        
        if (this.snake.checkCollisionWithFood(this.food.position)) {
            this.snake.grow();
            this.food.spawn();
            this.currentScore += 1;
            updateScore(this.currentScore, this.bestScore);
        }
        
        if (this.snake.checkCollisionWithWall() || this.snake.checkSelfCollision()) {
            this.endGame();
        }
        
        this.snake.render(this.app.stage);
        this.food.render(this.app.stage);
    }

    endGame() {
        this.isGameRunning = false;
        this.app.ticker.stop();
        this.bestScore = Math.max(this.bestScore, this.currentScore);
        updateScore(this.currentScore, this.bestScore);
        // Show GUI for restart (play/exit buttons)
    }

    setupControls() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp') this.snake.changeDirection(0, -1);
            if (e.key === 'ArrowDown') this.snake.changeDirection(0, 1);
            if (e.key === 'ArrowLeft') this.snake.changeDirection(-1, 0);
            if (e.key === 'ArrowRight') this.snake.changeDirection(1, 0);
        });
    }

    setupGUI() {
        setupGUI(this);
    }
}

const game = new Game();
game.startGame();
