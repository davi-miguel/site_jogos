class Engine {

  constructor(game) {
    this.Game = game;
    this.soundFiles = [
      'sound/engine1.mp3',
      'sound/engine2.mp3',
      'sound/engine3.mp3',
      'sound/drift.mp3'
    ];
    this.sounds = [];
    this.power = 0;
  }

  preload() {
    for (let i = 0; i < this.soundFiles.length; i++) {
      this.sounds[i] = loadSound(this.soundFiles[i]);
    }
  }

  powerUp(speed) {
    this.sounds[3].stop();
    if (this.power <= 0) {
      this.sounds[0].loop();
      this.sounds[1].loop();
      this.sounds[2].loop();
    }
    this.power = speed / 10;
    this.sounds[0].rate(this.power);
    this.sounds[1].rate(this.power);
    this.sounds[2].rate(this.power);
  }

  powerDown(speed) {
    if (speed === 0) {
      this.sounds[0].stop();
      this.sounds[1].stop();
      this.sounds[2].stop();
      this.sounds[3].stop();
      this.power = 0;
    }
    this.power = speed / 10;
    this.sounds[0].rate(this.power);
    this.sounds[1].rate(this.power);
    this.sounds[2].rate(this.power);
  }

  brake() {
    this.sounds[3].play();
  }

  stop() {
    this.power = 0;
    this.sounds[0].stop();
    this.sounds[1].stop();
    this.sounds[2].stop();
    this.sounds[3].stop();
  }

}