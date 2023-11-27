const buzina = new Audio();

buzina.src = './sound/buzina.mp4';

class Enemy {

  constructor(game, type, percentLeft, delay) {
    this.Game = game;
    this.visible = true;
    this.type = type;
    this.percentLeft = percentLeft;
    this.delay = delay;

    this.sprites = [{
        width: 70,
        height: 100,
        top: 350,
        left: 35,
        speed: 35
      },
      {
        width: 70,
        height: 100,
        top: 480,
        left: 35,
        speed: 35
      },
      {
        width: 70,
        height: 100,
        top: 600,
        left: 35,
        speed: 35
      },
      {
        width: 70,
        height: 140,
        top: 200,
        left: 155,
        speed: 35
      }
    ];
    this.sprite = this.sprites[type];
  }

  setup() {
    this.speed = this.sprites[this.type].speed;
    this.offset = 25;
    this.top = -this.delay;
    this.initialLeft = ((width / 2) - ((width / 3) * this.percentLeft));
    this.left = this.initialLeft - this.offset;
    this.width = 70;
    this.height = 100;
  }

  draw() {
    if (this.visible) {
      this.show();
      this.move();
      if (this.colliding()) {
        this.Game.Car.control = false;
        buzina.play();
        setTimeout(function(car) {
          car.control = true;
          car.sprite = car.defaultSprite;
        }, 500, this.Game.Car);
      }
    }
  }

  colliding() {
    const precision = 0.5;
    let collision = collideRectRect(
      this.top,
      this.left,
      this.width * precision,
      this.height * precision,
      this.Game.Car.top,
      this.Game.Car.left,
      this.Game.Car.width * precision,
      this.Game.Car.height * precision
    );
    if (collision) {
      this.Game.Enemy = this;
    }
    if (collision && this.type == 3) {
      collision = false;
      this.bonus();
      this.Game.Score.addSeconds();
    }

    return collision;
  }

  show() {
    image(this.Game.Car.image, this.left, this.top, this.width, this.height, this.sprite.left, this.sprite.top, this.sprite.width, this.sprite.height);
  }

  move() {    
    this.top = this.top + (this.Game.Track.speed - this.speed);
    if (this.top > height) {
      this.overtake();
    }
    if (this.top > height * 0.25) {
      if (this.type == 1) {
        if (this.left > this.Game.Car.limitLeft + 5) {
          this.left--;
        }
      }
      if (this.type == 2) {
        if (this.left < this.Game.Car.limitRight - 5) {
          this.left++;
        }
      }
    }
  }

  overtake() {
    this.visible = false;
    if (this.type != 3) {
      this.Game.overtake();
    }
  }

  bonus() {
    this.visible = false;
    this.top = -height;
  }

}