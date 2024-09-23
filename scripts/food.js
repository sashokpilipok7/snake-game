export default class Food {
    constructor() {
        this.size = 20; // Same size as snake segments
        this.position = { x: 0, y: 0 };
        this.spawn();
    }

    spawn() {
        this.position = {
            x: Math.floor(Math.random() * 20),
            y: Math.floor(Math.random() * 20)
        };
    }

    render(stage) {
        let rect = new PIXI.Graphics();
        rect.beginFill(0xFF0000);
        rect.drawRect(this.position.x * this.size, this.position.y * this.size, this.size, this.size);
        rect.endFill();
        stage.addChild(rect);
    }
}
