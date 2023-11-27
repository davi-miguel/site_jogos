var blocoF1,blocoF2,blocoF3,blocoF4,blocoF5,blocoF6,blocoF7,blocoF8,blocoF9,blocoF10,blocoF11,blocoF12,blocoF13,blocoF14,blocoF15,blocoF16,blocoF17,blocoF18,blocoF19,blocoF20,blocoF21,blocoF22,blocoF23,blocoF24,blocoF25,blocoF26,blocoF27,blocoF28,blocoF29;
var Fundo,FundoImg,goomba1Fase1,goomba1Fase1Group,goomba2Fase1Group,goombaFase1Img, barrierCima,barrierBaixo,barrierEsquerda,barrierDireita,blockT,blocoF,blocoFImg,blocoFGroup,blockTV,blockTGroup,blockTImg,caixaSAp,caixaSApGroup,caixaSApImg,Cano1,Cano2,Cano3,Cano4,Cano1Img;
var bowserImg;
var bowserVoando;
var player = invicible;
var blockT1;
var princesa,princesaImg;
var invicible = 1;
var Win = 1
var money1,money1Img,moneySound;
var BowserDerroted;
var money2;
var money3;
var money4;
var money5;
var money6;
var money7;
var money8;
var money9;
var money10;
var blockBreak
var dinoD;
var playerImg;
var spiny,spinyImg
var bandeira, bandeiraImg;
var dinoRino,dinoRinoImg;
var blockR,blockRImg,blockR1;
var chãoBaixoImg;
var caixaParkour,caixaParkourImg;
var estrela,estrelaImg
var fontMario;
var eat;
var score = 0;
var fly;
var gamestate = "play"
var walk;
var starS
var overworld;
var FaseM;
var FaseWin;
var warning;
var sleep
var die;
var jump;
var Ending;

    function preload(){
        playerImg = loadImage("mario-11.png");
        spinyImg = loadImage("spiny1(1).png");

        blockTImg = loadImage("chão.png");
        blocoFImg = loadImage("blocofase2.png"); 
        bandeiraImg = loadImage("bandeira.png");
        blockRImg = loadImage("blockT.png");
        chãoBaixoImg = loadImage("chaobaixo.png")
        dinoRinoImg = loadImage("dino rhinoM2.png");
        caixaParkourImg = loadImage("trampolim.png");
        estrelaImg = loadImage("estrela.png")
        bowserImg = loadImage("bowser-1.png");
        princesaImg = loadImage("Princess.png")
        
        overworld = loadSound("overworld.mp4");
        FaseM = loadSound("FaseMestre.mp3");
        FaseWin = loadSound("stateWin.mp4");
        warning = loadSound("warnig.wav");
        die = loadSound("Player Died.mp4");
        starS = loadSound("star.mp4");
        dinoD = loadSound("PrincessRescue.mp3");
        jump = loadSound("jump.wav");
        BowserDerroted = loadSound("Fim de jogo.mp3");
        fontMario = loadFont("./FontSuperMario/Super Mario World Regular.ttf")
        blockBreak = loadSound("breakBlock.wav");
        moneySound = loadSound("coin.wav");
        Ending = loadSound("Ending.mp3");

        money1Img = loadImage("moeda-1.png");
        caixaSApImg = loadImage("blocoAp.png");
        Cano1Img = loadImage("Cano1.png");

        goombaFase1Img = loadImage("Goomba2(1).png");
        walk = loadAnimation("Goomba1(1).png", "Goomba2(1).png", "Goomba-3(1).png", "Goomba-4(1).png", "Goomba-5(1).png", "Goomba-6(1).png");
        fly = loadAnimation("spiny1(1).png", "spiny2(1).png");
        eat = loadAnimation("dino rhinoM1.png", "dino rhinoM2.png");
        sleep = loadAnimation("mario-11.png", "mario-22.png", "mario-33.png");
        bowserVoando = loadAnimation("bowser-1.png", "bowser-2.png");

        walk.looping = true;
        fly.looping = true;
        eat.looping = true;
    }

    function setup(){
        createCanvas(2500,610);

        frameRate(30);

        overworld.play();

        caixaSApGroup =  createGroup();
        blockTGroup =  createGroup();
        blocoFGroup = createGroup();
        Cano2 = createSprite(1250,515,40,40);
        Cano2.addImage("Cano2", Cano1Img);
        Cano2.scale = 1.5;

        estrela = createSprite(200,-300,30,30);
        estrela.addImage("estrela", estrelaImg);


        caixaParkour = createSprite(-18,515,40,40);
        caixaParkour.addImage("caixaParkour", caixaParkourImg);
        caixaParkour.scale = 1

        dinoRino = createSprite(1950,360,40,40);
        dinoRino.addImage("dinoRino", bowserImg);
        dinoRino.scale = 1;

        dinoRino.addAnimation("eating", bowserVoando);

        Cano1 = createSprite(250,515,40,40);
        Cano1.addImage("Cano1", Cano1Img);
        Cano1.scale = 1.5

        bandeira = createSprite(37,80,40,40);
        bandeira.addImage("bandeira", bandeiraImg);
        bandeira.scale = 0.8;

        Cano4 = createSprite(1064,130,40,40);
        Cano4.addImage("Cano1", Cano1Img);
        Cano4.scale = 1.5

        player = createSprite(40,500,50,50);
        player.addImage("player", playerImg);
        player.scale = 1.2;

        princesa = createSprite(100,-50,50,50);
        princesa.addImage("princesa", princesaImg);
        princesa.scale = 1;

        sleep.frameDelay = 3

        barrierCima = createSprite(1,0,3000,1);
        barrierBaixo = createSprite(1,640,20000,210);
        barrierEsquerda = createSprite(1,1,1,1260);
        barrierDireita = createSprite(1509,1,400,1260);

        caixaSAp = createSprite(773,428,40,40);
        caixaSAp.addImage("caixaSAp", caixaSApImg);
        caixaSAp.scale = 1;
        caixaSApGroup.add(caixaSAp);

        blockT = createSprite(1001,428,30,30);
        blockT.addImage("blockt1", blocoFImg);
        blockT.scale = 1

        blockTV = createSprite(1080,428,30,30);
        blockTV.addImage("blockTV", blocoFImg)
        blockTV.scale = 1;

        caixaSAp = createSprite(1040,428,40,40);
        caixaSAp.addImage("caixaSAp", caixaSApImg);
        caixaSAp.scale = 1;
        blockTGroup.add(blockT);
        caixaSApGroup.add(caixaSAp);


        blockT = createSprite(20,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);


        blockT = createSprite(20,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);


        blockT = createSprite(60,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);


        blockT = createSprite(60,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);


        blockT = createSprite(100,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);


        blockT = createSprite(100,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);


        blockT = createSprite(140,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);


        blockT = createSprite(140,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);


        blockT = createSprite(180,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);


        blockT = createSprite(180,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(220,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(220,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(260,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(260,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(300,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(300,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(340,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(340,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(380,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(380,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(420,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(420,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(460,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(460,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(500,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(500,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(540,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(540,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(580,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(580,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(620,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(620,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(640,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(640,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(680,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(680,554,30,30);
        blockT.addImage("blockT", blockTImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(720,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(720,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(760,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(760,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(800,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(800,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(840,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(840,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(880,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(880,554,30,30);
        blockT.addImage("blockT", blockTImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(920,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(920,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(960,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(960,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(1000,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(1000,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(1040,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;

        blockT = createSprite(1040,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(1080,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(1080,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(1120,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(1120,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(1160,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(1160,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(1200,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(1200,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(1240,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(1240,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(1280,590,30,30);
        blockT.addImage("blockT", chãoBaixoImg)
        blockT.scale = 1;
        blockTGroup.add(blockT);

        blockT = createSprite(1280,554,30,30);
        blockT.addImage("blockT", blockTImg);
        blockT.scale = 1;
        blockTGroup.add(blockT);

        goomba1Fase1 = createSprite(1000,490,50,50);
        goomba1Fase1.addImage("goomba1Fase1", goombaFase1Img);
        goomba1Fase1.scale = 1
        //goomba1Fase1Group.add(goomba1Fase1)


        goomba1Fase1.addAnimation("walking", walk)

        goomba2Fase1 = createSprite(1200,490,50,50);
        goomba2Fase1.addImage("goomba2Fase1", goombaFase1Img);
        goomba2Fase1.scale = 1
        //goomba2Fase1Group.add(goomba2Fase1);

        goomba2Fase1.addAnimation("walking", walk)

        walk.frameDelay = 20;

        spiny = createSprite(1000,95,40,40);
        spiny.addImage("spiny", spinyImg);
        spiny.scale = 1;

        spiny.addAnimation("flying", fly);
        fly.frameDelay = 20;

        money1 = createSprite(774,380,40,40);
        money1.addImage("money1", money1Img);
        money1.scale = 1;

        money2 = createSprite(1080,380,40,40);
        money2.addImage("money2", money1Img);
        money2.scale = 1;

        money3 = createSprite(250,457,40,40);
        money3.addImage("money3", money1Img);
        money3.scale = 1;

        money4 = createSprite(400,504,40,40);
        money4.addImage("money3", money1Img);
        money4.scale = 1;

        money5 = createSprite(450,504,40,40);
        money5.addImage("money3", money1Img);
        money5.scale = 1;

        money6 = createSprite(700,504,40,40);
        money6.addImage("money3", money1Img);
        money6.scale = 1;

        money7 = createSprite(900,504,40,40);
        money7.addImage("money3", money1Img);
        money7.scale = 1;

        money8 = createSprite(250,130,40,40);
        money8.addImage("money3", money1Img);
        money8.scale = 1;

        money9 = createSprite(1000,130,40,40);
        money9.addImage("money3", money1Img);
        money9.scale = 1;

        money10 = createSprite(800,130,40,40);
        money10.addImage("money3", money1Img);
        money10.scale = 1;

        //1
blocoF1 = createSprite(1071,180,30,30);
blocoF1.addImage("blocoF1", blocoFImg);
blocoF1.scale = 1;
blocoFGroup.add(blocoF1);

//2
blocoF2 = createSprite(1030,180,30,30);
blocoF2.addImage("blocoF2", blocoFImg);
blocoF2.scale = 1;
blocoFGroup.add(blocoF2);

//3
blocoF3 = createSprite(990,180,30,30);
blocoF3.addImage("blocoF3", blocoFImg);
blocoF3.scale = 1;
blocoFGroup.add(blocoF3);

//4
blocoF4 = createSprite(950,180,30,30);
blocoF4.addImage("blocoF4", blocoFImg);
blocoF4.scale = 1;
blocoFGroup.add(blocoF4);

//5
blocoF5 = createSprite(910,180,30,30);
blocoF5.addImage("blocoF5", blocoFImg);
blocoF5.scale = 1;
blocoFGroup.add(blocoF5);

//6
blocoF6 = createSprite(870,180,30,30);
blocoF6.addImage("blocoF6", blocoFImg);
blocoF6.scale = 1;
blocoFGroup.add(blocoF6);

//7
blocoF7 = createSprite(830,180,30,30);
blocoF7.addImage("blocoF7", blocoFImg);
blocoF7.scale = 1;
blocoFGroup.add(blocoF7);

//8
blocoF8 = createSprite(790,180,30,30);
blocoF8.addImage("blocoF8", blocoFImg);
blocoF8.scale = 1;
blocoFGroup.add(blocoF8);

//9
blocoF9 = createSprite(750,180,30,30);
blocoF9.addImage("blocoF9", blocoFImg);
blocoF9.scale = 1;
blocoFGroup.add(blocoF9);

//10
blocoF10 = createSprite(710,180,30,30);
blocoF10.addImage("blocoF10", blocoFImg);
blocoF10.scale = 1;
blocoFGroup.add(blocoF10);

//11
blocoF11 = createSprite(670,180,30,30);
blocoF11.addImage("blocoF11", blocoFImg);
blocoF11.scale = 1;
blocoFGroup.add(blocoF11);

//12
blocoF12 = createSprite(630,180,30,30);
blocoF12.addImage("blocoF12", blocoFImg);
blocoF12.scale = 1;
blocoFGroup.add(blocoF12);

//13
blocoF13 = createSprite(590,180,30,30);
blocoF13.addImage("blocoF13", blocoFImg);
blocoF13.scale = 1;
blocoFGroup.add(blocoF13);

//14
blocoF14 = createSprite(550,180,30,30);
blocoF14.addImage("blocoF14", blocoFImg);
blocoF14.scale = 1;
blocoFGroup.add(blocoF14);

//15
blocoF15 = createSprite(510,180,30,30);
blocoF15.addImage("blocoF15", blocoFImg);
blocoF15.scale = 1;
blocoFGroup.add(blocoF15);

//16
blocoF16 = createSprite(470,180,30,30);
blocoF16.addImage("blocoF16", blocoFImg);
blocoF16.scale = 1;
blocoFGroup.add(blocoF16);

//17
blocoF17 = createSprite(430,180,30,30);
blocoF17.addImage("blocoF17", blocoFImg);
blocoF17.scale = 1;
blocoFGroup.add(blocoF17);

//18
blocoF18 = createSprite(390,180,30,30);
blocoF18.addImage("blocoF18", blocoFImg);
blocoF18.scale = 1;
blocoFGroup.add(blocoF18);

//19
blocoF19 = createSprite(350,180,30,30);
blocoF19.addImage("blocoF19", blocoFImg);
blocoF19.scale = 1;
blocoFGroup.add(blocoF19);

//20
blocoF20 = createSprite(310,180,30,30);
blocoF20.addImage("blocoF20", blocoFImg);
blocoF20.scale = 1;
blocoFGroup.add(blocoF20);

//21
blocoF21 = createSprite(270,180,30,30);
blocoF21.addImage("blocoF21", blocoFImg);
blocoF21.scale = 1;
blocoFGroup.add(blocoF21);

//22
blocoF22 = createSprite(230,180,30,30);
blocoF22.addImage("blocoF22", blocoFImg);
blocoF22.scale = 1;
blocoFGroup.add(blocoF22);

//23
blocoF23 = createSprite(190,180,30,30);
blocoF23.addImage("blocoF23", blocoFImg);
blocoF23.scale = 1;
blocoFGroup.add(blocoF23);

//24
blocoF24 = createSprite(150,180,30,30);
blocoF24.addImage("blocoF24", blocoFImg);
blocoF24.scale = 1;
blocoFGroup.add(blocoF24);

//25
blocoF25 = createSprite(110,180,30,30);
blocoF25.addImage("blocoF25", blocoFImg);
blocoF25.scale = 1;
blocoFGroup.add(blocoF25);

//26
blocoF26 = createSprite(70,180,30,30);
blocoF26.addImage("blocoF26", blocoFImg);
blocoF26.scale = 1;
blocoFGroup.add(blocoF26);

//27
blocoF27 = createSprite(30,180,30,30);
blocoF27.addImage("blocoF27", blocoFImg);
blocoF27.scale = 1;
blocoFGroup.add(blocoF27);

//28
blocoF28 = createSprite(950,180,30,30);
blocoF28.addImage("blocoF28", blocoFImg);
blocoF28.scale = 1;
blocoFGroup.add(blocoF28);

//29
blocoF29 = createSprite(950,180,30,30);
blocoF29.addImage("blocoF29", blocoFImg);
blocoF29.scale = 1;
blocoFGroup.add(blocoF29);


        blockR = createSprite(-10,523.5,40,40);
        blockR.addImage("blockR", blockRImg);
        blockR.scale = 1;

        blockR1 = createSprite(1314,523.5,40,40);
        blockR1.addImage("blockR1", blockRImg);
        blockR1.scale = 0;

        player.addAnimation("sleeping", sleep);
    }

    function draw(){
        background(0,100,0);

        if(gamestate === "play"){
            textSize(20)
            fill("white");
            textFont(fontMario)
            text("" + score,1200,30);



            goomba1Fase1.changeAnimation('walking');
            goomba1Fase1.x = goomba1Fase1.x - 3;

            goomba2Fase1.changeAnimation('walking');
            goomba2Fase1.x = goomba2Fase1.x - 3;

            spiny.changeAnimation('flying');
            spiny.x = spiny.x - 0.5;

            dinoRino.changeAnimation("eating", eat)

            player.changeAnimation("sleeping", sleep);


            if(player.isTouching(goomba1Fase1)){
                if(player.velocityY <= 0){
                    die.play();
                    overworld.setVolume(0.0);
                    goomba2Fase1.remove();
                    player.remove();
                    goomba1Fase1.remove();
                    spiny.remove();
                }else{
                    goomba1Fase1.remove();
                    score = score + 2540;
                    player.y = player.y - 40;
                }
            }

            if(player.isTouching(goomba2Fase1)){
                if(player.velocityY <= 0){
                    die.play();
                    overworld.setVolume(0.0);
                    goomba2Fase1.remove();
                    player.remove();
                    goomba1Fase1.remove();
                    spiny.remove();
                }else{
                    goomba2Fase1.remove();
                    score = score + 2560;
                    player.y = player.y - 40;
                }
            }

            if (player.isTouching(blocoFGroup)){
                player.velocityY = 0;
            }
            

            if(player.isTouching(barrierBaixo)){
                player.velocityY = 0
            }else{
            player.velocityY = player.velocityY + 0.8;
            }

            if(goomba1Fase1.isTouching(barrierBaixo)){
            goomba1Fase1.velocityY = 0;

            }else{
                goomba1Fase1.velocityY = goomba1Fase1.velocityY + 1;
            }

            if(spiny.isTouching(blocoFGroup)){
                spiny.velocityY = 0;
            
            }else{
                    spiny.velocityY = spiny.velocityY + 1;
            }

            if(player.collide(caixaSApGroup)){
                player.velocityY = 0;
            }

            if(player.isTouching(blockTGroup)){
                player.velocityY = 0;
            }

            

            if (player.isTouching(bandeira)){
                goomba1Fase1.remove();
                goomba1Fase1.remove();
                spiny.remove();
                bandeira.remove();
                overworld.setVolume(0.0);
                FaseWin.play();
                blockTV.remove();
                caixaSAp.remove();
                score = score + 5600;                
                setTimeout(() => {
                warning.play();
                }, 9000);

            setTimeout(() => {
                blocoF1.remove();
                blocoF2.remove();
                blocoF3.remove();
                blocoF4.remove();
                blocoF5.remove();
                blocoF6.remove();
                blocoF7.remove();
                blocoF8.remove();
                blocoF9.remove();
                blocoF10.remove();
                blocoF11.remove();
                blocoF12.remove();
                blocoF13.remove();
                blocoF14.remove();
                blocoF15.remove();
                blocoF16.remove();
                blocoF17.remove();
                blocoF18.remove();
                blocoF19.remove();
                blocoF20.remove();
                blocoF21.remove();
                blocoF22.remove();
                blocoF23.remove();
                blocoF24.remove();
                blocoF25.remove();
                blocoF26.remove();
                blocoF27.remove();
                blocoF28.remove();
                blockBreak.play();
                blocoF29.remove();
                Cano1.remove();
                Cano2.remove();
                Cano4.remove();
                caixaSAp.remove();
                FaseM.play();
                dinoSLeft();
            }, 13000);

            setTimeout(() => {
                estrela.velocityY = estrela.velocityY + 1.5;
            }, 18000);
            }

            if(player.isTouching(money1)){
                moneySound.setVolume(3);
                money1.remove();
                moneySound.play();
                score = score + Math.round(random(1000,1999));
            }

            if(player.isTouching(money2)){
                moneySound.setVolume(3);
                money2.remove();
                moneySound.play();
                score = score + Math.round(random(1000,1999));
            }

            if(player.isTouching(money3)){
                moneySound.setVolume(3);
                money3.remove();
                moneySound.play();
                score = score + Math.round(random(1000,1999));
            }

            if(player.isTouching(money4)){
                moneySound.setVolume(3);
                money4.remove();
                moneySound.play();
                score = score + Math.round(random(1000,1999));
            }

            if(player.isTouching(money5)){
                moneySound.setVolume(3);
                money5.remove();
                moneySound.play();
                score = score + Math.round(random(1000,1999));
            }

            if(player.isTouching(money6)){
                moneySound.setVolume(3);
                money6.remove();
                moneySound.play();
                score = score + Math.round(random(1000,1999));
            }

            if(player.isTouching(money7)){
                moneySound.setVolume(3);
                money7.remove();
                moneySound.play();
                score = score + Math.round(random(1000,1999));
            }

            if(player.isTouching(money8)){
                moneySound.setVolume(3);
                money8.remove();
                moneySound.play();
                score = score + Math.round(random(1000,1999));
            }

            if(player.isTouching(money9)){
                moneySound.setVolume(3);
                money9.remove();
                moneySound.play();
                score = score + Math.round(random(1000,1999));
            }

            if(player.isTouching(money10)){
                moneySound.setVolume(3);
                money10.remove();
                moneySound.play();
                score = score + Math.round(random(1000,1999));
            }

            if(goomba1Fase1.isTouching(Cano1)){
                goomba1Fase1.velocityX = goomba1Fase1.velocityX + 3;
            }

            if(goomba1Fase1.isTouching(Cano2)){
                goomba1Fase1.velocityX = goomba1Fase1.velocityX - 3;
            }

            if(goomba2Fase1.isTouching(Cano1)){
                goomba2Fase1.velocityX = goomba2Fase1.velocityX + 3;
            }

            if(goomba2Fase1.isTouching(Cano2)){
                goomba2Fase1.velocityX = goomba2Fase1.velocityX - 1;
            }

            if(spiny.isTouching(bandeira)){
                spiny.velocityX = spiny.velocityX + 0.5;
            }

            if(spiny.isTouching(Cano4)){
                spiny.velocityX = spiny.velocityX - 0.5;
            }

            if(player.collide(Cano1)){
                player.velocityY = 0;
            }

            if(player.collide(spiny)){
                die.play();
                overworld.setVolume(0.0);
                player.remove();
                goomba2Fase1.remove();
                goomba1Fase1.remove();
                spiny.remove();
            }

            if(player.collide(Cano2)){
                player.velocityY = 0;
            }

            if(player.collide(Cano4)){
                player.velocityY = 0;
            }

            if(player.collide(Cano4)){
                player.velocityY = 0;
            }

            if(player.collide(blockTV)){

                player.velocityY = 0;

                if(keyDown("left")){
                    blockTV.x = blockTV.x - 22;
                }

                if(keyDown("right")){
                    blockTV.x = blockTV.x + 22;
                }

                if(keyDown("up")){
                    blockTV.y = blockTV.y - 100;
                }

                if(keyDown("down")){
                    blockTV.y = blockTV.y + 22;
                }
            }

            if(keyDown("left")){
                player.x = player.x - 10;
            }

            if(keyDown("right")){
                player.x = player.x + 10;
            }

            if(player.velocityY >= 0.8){
                    
            }else{
                if(keyDown("up")){
                    jump.play();
                    player.y = player.y - 150;
                }
            }

            caixaParkour.velocityY = caixaParkour.velocityY +0.6

            if(keyDown("ctrl")){
                if(player.isTouching(caixaParkour)){
                    if(keyDown("left")){
                        caixaParkour.x = caixaParkour.x - 10;
                    }

                    if(keyDown("Right")){
                        caixaParkour.x = caixaParkour.x + 10;
                    }

                    if(keyDown("up")){
                        caixaParkour.y = player.y + 10;
                    }
                }
            }

            if(dinoRino.isTouching(blockR)){
                dinoSRight();
                blockR1.scale = 1;
            }
        
            if(dinoRino.isTouching(blockR1)){
                dinoSLeft();
            }

            if(caixaParkour.isTouching(blockTGroup)){
                caixaParkour.velocityY = 0;
            }

            if(dinoRino.isTouching(caixaSAp)){
                caixaSAp.remove();
                caixaSAp.remove();
                blockBreak.play();
            }

            if(player.isTouching(estrela)){
                estrela.remove();
                overworld.setVolume(0.0);
                FaseM.setVolume(0.0);
                starS.play();
                invicible = 2;
            }else{
                invicible = 1;
            }

            if(invicible = 2){
                if(player.isTouching(dinoRino)){
                    score = score + 26367;
                    BowserDerroted.play();
                    starS.setVolume(0.0);
                    dinoRino.remove();
                    setTimeout(() => {
                    dinoD.play();
                    barrierDireita.remove();
                    princesa.velocityY = princesa.velocityY + 9;
                    }, 14000);
                    setTimeout(() => {
                    player.velocityX = player.velocityX + 3;
                    princesa.velocityY = 0;
                    princesa.velocityX = princesa.velocityX + 3;
                    Ending.play();
                    }, 32000);
                }
                
            }else{
                if(player.isTouching(dinoRino)){
                    die.play();
                    FaseM.setVolume(0.0);
                    goomba2Fase1.remove();
                    player.remove();
                    goomba1Fase1.remove();
                    spiny.remove();
                }
            }

            if(princesa.isTouching(blockTGroup)){
                princesa.velocityY = 0;
            }

            if(estrela.isTouching(blockTGroup)){
                estrela.velocityY = 0
            }
        
        player.bounceOff(blocoFGroup);
        player.bounceOff(caixaParkour);
        player.bounceOff(barrierDireita);
        blockTV.bounceOff(barrierDireita);


        function dinoSLeft(){
            dinoRino.velocityX = - 2;
        }

        function dinoSRight(){
            dinoRino.velocityX = + 2;
        }
    }
        drawSprites();
        
    }