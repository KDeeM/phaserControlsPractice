class Scene1 extends Phaser.Scene{
  constructor(){
    super("Scene1");
    this.virtualButtons = {
      left : false,
      right : false
    }
  }

  preload(){
    this.load.image("ball", "ball.png");
    this.load.image("leftBtn", "left.png");
    this.load.image("rightBtn", "right.png");
  }

  create(){
    this.ball = this.physics.add.image(config.width / 2, config.height / 2, "ball").setCollideWorldBounds(true).setScale(0.5);

    // create keyboard controls
    this.keys = {};
    let keysToAdd = ["A", "D", "Left", 'right'];
    this.setKeys(keysToAdd);
    
    // create virtual buttons
    this.buttons = this.add.group();
    this.createVirtualButtons();
  }

  update(){
    this.keyPresses();
  }

  setKeys(arr){
    let l = arr.length;
    let i = 0;

    for(;i<l;i++){
      let key = arr[i].toUpperCase();
      this.keys[key] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[key]);
    }
  }

  keyPresses(){
    if(this.keys.A.isDown || this.keys.LEFT.isDown || this.virtualButtons.left){
      this.ball.setVelocityX(-100);
    }else if(this.keys.D.isDown || this.keys.RIGHT.isDown || this.virtualButtons.right){
      this.ball.setVelocityX(100);
    }else{
      this.ball.setVelocityX(0);
    }
  }

  createVirtualButtons(){
    let leftBtn = this.add.image(10, config.height - 10, "leftBtn").setOrigin(0, 1).setInteractive()
      .on("pointerdown", () => {this.virtualButtons.left = true;} )
      .on("pointerup", () => {this.virtualButtons.left = false;} );
    let rightBtn = this.add.image(config.width - 10, config.height - 10, "rightBtn").setOrigin(1, 1).setInteractive()
      .on("pointerdown", () => {this.virtualButtons.right = true;} )
      .on("pointerup", () => {this.virtualButtons.right = false;} );
  }
}