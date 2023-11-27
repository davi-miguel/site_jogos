class Game {

  constructor() {
    this.Track = new Track(this);
    this.Car = new Car(this);
    this.Engine = new Engine(this);
    this.Score = new Score(this);
    this.Circuit = new Circuit(this);
    this.running = true;
    this.started = false;
    this.winner = false;
  }

  preload() {
    this.Track.preload();
    this.Car.preload();
    this.Engine.preload();
    this.Score.preload();
  }

  setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(50);
    this.Track.setup();
    this.Car.setup();
  }

  start() {
    this.Score.start();
    this.started = true;
    setInterval(function(game) {
      game.Circuit.addEnemy();
    }, 1500, this);
  }

  draw() {
    if (this.running) {
      this.Track.draw();
      this.Car.draw();
      this.Score.draw();
      if (this.started && !this.winner) {
        this.Circuit.draw();
      }
    } else {
      noLoop();
    }
  }

  reload(){
    window.location.replace(window.location.pathname + window.location.search + window.location.hash);
  }

  over() {
    this.Car.stop();
    this.running = false;
    setTimeout(this.reload, 2000)
  }

  overtake() {
    this.Score.position--;
    if (this.Score.position === 1) {
      this.winner = true;
    }
  }

}