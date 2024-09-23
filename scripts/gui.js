export function setupGUI(game) {
    const style = new PIXI.TextStyle({
        fill: "#FFFFFF",
        fontSize: 20
    });

    const currentScoreLabel = new PIXI.Text("Current Score: 0", style);
    currentScoreLabel.x = 10;
    currentScoreLabel.y = 10;
    game.app.stage.addChild(currentScoreLabel);

    const bestScoreLabel = new PIXI.Text("Best Score: 0", style);
    bestScoreLabel.x = 10;
    bestScoreLabel.y = 40;
    game.app.stage.addChild(bestScoreLabel);
}

export function updateScore(currentScore, bestScore) {
    currentScoreLabel.text = `Current Score: ${currentScore}`;
    bestScoreLabel.text = `Best Score: ${bestScore}`;
}
