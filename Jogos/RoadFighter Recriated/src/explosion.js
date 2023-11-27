class Explosion {

  constructor(car) {
    this.Car = car;
    this.frame = 0;
  }
 
  preload() {
    this.sound = loadSound('sound/explode.mp3');
  }

  setup() {
    this.width = 100;
    this.height = 100;
    this.sprite = {
      width: 100,
      height: 100,
      top: 210,
      left: 240
    };
  }
    
  show() {
    let left = this.Car.left;
    if (left > this.Car.initialLeft) {
      left = left - this.Car.width;
    }
    image(this.Car.image, left, this.Car.top, this.width, this.height, this.sprite.left, this.sprite.top, this.sprite.width, this.sprite.height);
  }
  
}