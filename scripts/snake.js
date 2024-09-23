export default class Snake {
    constructor() {
        this.size = 20; // Each block of the snake
        this.reset();
    }

    reset() {
        this.body = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
        this.direction = { x: 1, y: 0 }; // Starts moving to the right
    }

    move() {
        let head = { 
            x: this.body[0].x + this.direction.x, 
            y: this.body[0].y + this.direction.y 
        };
        
        this.body.unshift(head); // Add the new head to the front
        this.body.pop(); // Remove the last segment (tail)
    }

    grow() {
        let tail = this.body[this.body.length - 1];
        this.body.push({ x: tail.x, y: tail.y });
    }

    changeDirection(x, y) {
        // Prevent the snake from moving in the opposite direction
        if (x !== -this.direction.x || y !== -this.direction.y) {
            this.direction = { x, y };
        }
    }

    checkCollisionWithWall() {
        let head = this.body[0];
        return head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20;
    }

    checkSelfCollision() {
        let head = this.body[0];
        for (let i = 1; i < this.body.length; i++) {
            if (head.x === this.body[i].x && head.y === this.body[i].y) {
                return true;
            }
        }
        return false;
    }

    checkCollisionWithFood(foodPosition) {
        let head = this.body[0];
        return head.x === foodPosition.x && head.y === foodPosition.y;
    }

    render(stage) {
        stage.removeChildren(); // Clear previous frame

        this.body.forEach(segment => {
            let rect = new PIXI.Graphics();
            rect.beginFill(0x00FF00);
            rect.drawRect(segment.x * this.size, segment.y * this.size, this.size, this.size);
            rect.endFill();
            stage.addChild(rect);
        });
    }
}
