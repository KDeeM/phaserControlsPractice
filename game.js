// try out passing a canvas context to phaser
let gameCanvas = document.querySelector("#gameCanvas");
let gameContext = gameCanvas.getContext("2d");

let config = {
  width: 360,
  height: 480,
  type: Phaser.CANVAS,
  canvas: gameCanvas,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.Fit
  },
  backgroundColor: 0x75da92,
  scene: [Scene1]
}


let game = new Phaser.Game(config);

