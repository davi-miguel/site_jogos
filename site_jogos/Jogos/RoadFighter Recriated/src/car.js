class Car {

  constructor(game) {
    this.Game = game;
    this.Explosion = new Explosion(this);
    this.visible = true;
    this.control = true;

    this.defaultSprite = {
      width: 70,
      height: 100,
      top: 20,
      left: 20
    };
    this.leftSprite = {
      width: 90,
      height: 110,
      top: 5,
      left: 405
    };
    this.rightSprite = {
      width: 110,
      height: 115,
      top: 5,
      left: 90
    };

  }

  preload() {
    this.image = loadImage('img/cars-sprites1.png');
    this.Explosion.preload();
  }

  setup() {
    this.offset = 25;
    this.top = height - 150;
    this.initialLeft = (width / 2) - this.offset;
    this.left = this.initialLeft;
    this.width = 70;
    this.height = 100;
    this.sprite = this.defaultSprite;
    this.limitLeft = parseInt(this.Game.Track.width * 0.25);
    this.limitRight = parseInt(this.Game.Track.width * 0.75) - this.width + this.offset;
    this.Explosion.setup();
  }

  draw() {
    if (this.visible) {
      this.show();
      if (this.control) {
        if (keyIsDown(37)) {
          this.toLeft();
        }
        if (keyIsDown(39)) {
          this.toRight();
        }
      } else {
        this.loseControl();
      }
    } else {
      this.Explosion.show();
    }
  }

  show() {
    image(this.image, this.left, this.top, this.width, this.height, this.sprite.left, this.sprite.top, this.sprite.width, this.sprite.height);
  }

  toLeft() {
    if (this.left > this.limitLeft) {
      this.left = this.left - (this.Game.Track.speed / 5);
    } else {
      this.explode();
    }
  }

  toRight() {
    if (this.left < this.limitRight) {
      this.left = this.left + (this.Game.Track.speed / 5);
    } else {
      this.explode();
    }
  }

  explode() {
    this.Explosion.sound.play();
    this.stop();
    setTimeout(function(car) {
      car.start();
    }, 2000, this);
  }

  start() {
    this.left = this.initialLeft;
    this.visible = true;
    this.control = true;
    this.sprite = this.defaultSprite;
  }

  stop() {
    this.visible = false;
    this.Game.Track.stop();
    this.Game.Engine.stop();
  }

  loseControl() {
    let enemyCenter = this.Game.Enemy.left + (this.Game.Enemy.width / 2);
    if (this.left > enemyCenter) {
      this.toRight();
      this.sprite = this.rightSprite;
    } else {
      this.toLeft();
      this.sprite = this.leftSprite;
    }
  }

}