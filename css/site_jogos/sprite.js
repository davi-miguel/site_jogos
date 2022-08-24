function sprite(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas) {
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

var bg = new sprite(0, 0, 600, 600),
spriteBoneco = new sprite(618, 16, 87, 87),

perdeu = new sprite(603, 478, 397, 358),
jogar = new sprite(603, 127, 397, 347),
novo = new sprite(68, 721, 287, 93),
spriteRecord = new sprite(28, 879, 441, 95),
spriteChao = new sprite(0, 604, 600, 54),

redObstacle = new sprite(662, 867, 50, 120),
pinkObstacle = new sprite(719, 867, 50, 120),
blueObstacle = new sprite(779, 867, 50, 120),
greenObstacle = new sprite(839, 867, 50, 120),
yellowObstacle = new sprite(898, 867, 50, 120)