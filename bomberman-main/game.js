kaboom({
  global: true,
  fullscreen: true,
  scale: 2,
  debug: true,
  clearColor: [0,1,0,0]
})
 const MOVE_SPEED = 120;
 const ENEMY_SPEED = 10;
const som_explosao = new Audio();
som_explosao.src = "explo.mp4"
const som_gameover = new Audio();
som_gameover.src = "hurry.mp4"
const som_parar = new Audio();
som_parar.src = "parar.ogg"

loadRoot('https://i.imgur.com/');

loadSprite('wall-steel', 'EkleLlt.png'); 
loadSprite('brick-red', 'C46n8aY.png');
loadSprite('door', 'Ou9w4gH.png');
loadSprite('kaboom', 'o9WizfI.png');
loadSprite('bg', 'qIXIczt.png');
loadSprite('wall-gold', 'VtTXsgH.png');
loadSprite('brick-wood', 'U751RRV.png');

loadSprite('bomberman', 'T0xbHb8.png', {
  sliceX: 7,
  sliceY: 4,
  anims: {
    //stoped
    idleLeft: { from: 21, to: 21 },
    idleRight: { from: 7, to: 7 },
    idleUp: { from: 0, to: 0 },
    idleDown: { from: 14, to: 14 },

    //move
    moveLeft: { from: 22 , to: 27  },
    moveRigth: { from: 8, to: 13 },
    moveUp: { from: 1, to: 6 },
    moveDown: { from: 15, to: 20 },    
  }
  
});

loadSprite('boomber', 'etY46bP.png', {
  sliceX: 3,

  anims: {
    move: { from: 0, to: 2 },
  }
})

loadSprite('baloon', 'z59lNU0.png', { sliceX: 3 })
loadSprite('ghost', '6YV0Zas.png', { sliceX: 3 })
loadSprite('slime', 'c1Vj0j1.png', { sliceX: 3 })
loadSprite('goomba', 'KPO3fR9.png', { sliceX: 1 })
loadSprite('goomba1', 'KPO3fR9.png', { sliceX: 1 })

loadSprite('explosion', 'baBxoqs.png', { 
  sliceX: 5,
  sliceY: 5,
})


scene('game', ({level, score}) => {
  layers(['bg', 'obj', 'ui'], 'obj');

  const maps = [
    [
      'aaaaaaaaaaaaaaaaaaaaaaa',
      'azzzz&*w   &      w& sa',
      'awazazazazazazzz} aaaaa',
      'awzzwzwzwzwzwwzz  aaaaaaa',
      'a&*&wwwwww  }     $     a',
      'awazazazazazazzz  aaaaa%a',
      'a zzz   *& &z zz  w % a a',
      'a azazazazaza zz  z   a a',
      'a wwww}zzz zz zz  z  &a%a',
      'a wzzz} *** &}zz} z **a aaa',
      'awzzww  ** &*wzz  w %sa  da',
      'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
    ],
    [
      'bbbbbbbbbbbbbbbbbbbbbbbbb',
      'b}      *&**wwb}b}    &* db',
      'b bwbwbwbwbwbwb b bbbbbbb',
      'b &wwwwwww**&&  b&b',
      'bwbwbwbwbwbwb b b b',
      'b www$   }wwwwb b b',
      'b bwbwbwb bwb b b b',
      'b www  **** w b b b',
      'b bwbwbwb bwbwb}b b',
      'b  www *& www b b b',
      'b wwbwbwbwbwwsb  &b',
      'bbbbbbbbbbbbbbbbbbb',
    ],
    [
      'bbbbbbbbbbbbbbbbbbbbbbbbbbb',
      'bwwww  $*$    b    $    &db',
      'bwbwbwbwbwbwbwb bbbbbbbbbbb',
      'b    %   *$   b & b',
      'bwbbb    bwbwbwbwbb',
      'bwwwbwbwwwwwwwb   b',
      'azzzb    $  &}a  *b',
      'azazababababa a %&b',
      'a zzzzzzzzzzz a   b',
      'a awababababazazazb',
      'b ww     *$&b   wsb',
      'bbbbbbbbbbbbbbbbbbb',
    ],
    [
      'aaaaaaaaaaaaaaaabababababab',
      'aab&$*         *&&&      db',
      'azazazazazazabaababababbabb',
      'azazabazabaza%a',
      'azzzz&$  zzzz a',
      'azazazazazaza}a',
      'a zzzzzzzzzzz a',
      'b bwbwbwb bwbwb',
      'b wwwwwwwwwwwwb',
      'bb& bwbwbwbwbwb',
      'bww&  $   wwwqb',
      'bbbbbbbbbbbbbbb',
    ],
    [
      'aaaaaaaaaaaaaaaaaaa',
      'azzzz&    a  &   %aaaaaaaaa',
      'awazaz ba bzazzz} ad  $*  a',
      'awzzwz bw bzwwzz  aaaaaaa}a',
      'a*&%ww ww b }   $ &     a a',
      'a$b az ba bzazzz  aaaaa%a a',
      'a b b&*b &b&z zz  w %}a a%a',
      'a b az ba bza zz  z   a a a',
      'a b ww}bz bzz zz  z  $a%a a',
      'a b%zz}b *b &}zz}%z   a a a',
      'ay     b    *wzz sw %}a$  a',
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    ],
    [
      'aeeeeeeeeeeaaaaaaaaaaaaaaaa',
      'aybbbbbbbbyyyyyyyyyyyyyeeea',
      'ayyyyyyyyyyyyyyyyyyyyyyybea',
      'aybbbbbbbbbbbbbbbbbbbbbybda',
      'aybbbbbbbbbbbbyyybbbbbbybea',
      'a bbbbbbbbbbbbbbyyyyyyyybea',
      'a bbbbbyyyyyyyybbbbbbbbbbea',
      'a bbbbbybbbbbyybbbbbbbbbbea',
      'a bbbbbybyyyyyyyyyyyyyyy va',
      'a bbbbbybybbbybbbbbbbbbbbaa',
      'a yyyyyybybbbybbbbbbbbbb aa',
      'a bbbbbbbybbbyyyyyyyyyyy sa',
      'aeeeeeeeeeaaaaaaaaaaaaaaaaa',
    ]
  ]

  const levelCfg = {
    width: 26,
    height: 26,
    a: [sprite('wall-steel'), 'wall-steel', solid(), 'wall'],
    z: [sprite('brick-red'), 'wall-brick', solid(), 'wall'],
    v: [sprite('door'), 'wall-brick', { dir: -1 }, 'dangerous', { timer: 0 }],
    s: [sprite('door'), 'wall-brick', solid(), 'wall'],
    d: [sprite('door'), 'door', 'wall', solid()],
    t: [sprite('brick-red'), 'wall-brick-dool', solid(), 'wall'],
    q: [sprite('door'), 'wall-brick-dool', solid(), 'wall'],
    b: [sprite('wall-gold'), 'wall-gold', solid(), 'wall'],
    y: [sprite('wall-gold'), 'wall-gold', 'wall'],
    e: [sprite('wall-steel'), 'wall-steel', 'wall'],
    w: [sprite('brick-wood'), 'wall-brick', solid(), 'wall'],
    p: [sprite('brick-wood'), 'wall-brick-dool', solid(), 'wall'],
    '}': [sprite('ghost'), 'dangerous', 'ghost', { dir: -1, timer: 0 }],
    '&': [sprite('slime'), 'slime', { dir: -1 }, 'dangerous', { timer: 0 }],  
    '*': [sprite('baloon'), 'baloon', { dir: -1 }, { timer: 0 }, solid()],
    '$': [sprite('goomba'), 'goomba', { dir: -1 }, 'dangerous', { timer: 0 }],
    '%': [sprite('goomba1'), 'goomba1', { dir: -1 }, 'dangerous', { timer: 0 }],
  }

  const gameLevel = addLevel(maps[level], levelCfg);

  add([sprite('bg'), layer('bg')])


  const scoreLabel = add([
    text('Score: ' + score),
    pos(500, 30),
    layer('ui'),
    {
      value: score,
    },
    scale(1)
  ])

  add([text('Level: ' + parseInt(level + 1)), pos(500, 60), scale(1)])

  const player = add([
    sprite('bomberman', {
      animeSpeed: 0.1,
      frame: 14,
    }),
    pos(20,190),
    { dir: vec2(1,0) },
  ])

  //ACTION PLAYER
  player.action(() => {
    player.pushOutAll()
  })

  keyDown('left', () => {
    player.move(-MOVE_SPEED, 0);
    player.dir = vec2(-1, 0);
  })

  keyDown('right', () => {
    player.move(MOVE_SPEED, 0);
    player.dir = vec2(1, 0);
  })

  keyDown('up', () => {
    player.move(0, -MOVE_SPEED);
    player.dir = vec2(0, -1);
  })  

  keyDown('down', () => {
    player.move(0, MOVE_SPEED);
    player.dir = vec2(0, 1);
  })   

  keyPress('left', () => {
    player.play('moveLeft')
  })

  keyPress('right', () => {
    player.play('moveRigth')
  })

  keyPress('up', () => {
    player.play('moveUp')
  })  

  keyPress('down', () => {
    player.play('moveDown')
  }) 
  
  keyRelease('left', () => {
    player.play('idleLeft')
  })

  keyRelease('right', () => {
    player.play('idleRight')
  })
  
  keyRelease('up', () => {
    player.play('idleUp')
  })

  keyRelease('down', () => {
    player.play('idleDown')
  })

  keyPress('space', () => {
    spawnBomber(player.pos.add(player.dir.scale(0)))
  })

  //ACTIONS ENEMY
  action('baloon', (s) => {
    s.pushOutAll();
    s.move(s.dir * ENEMY_SPEED, 0)
    s.timer -= dt()
    if (s.timer <= 0) {
      s.dir = -s.dir
      s.timer = rand(5)
    }
  })

  action('slime', (s) => {
    s.pushOutAll();
    s.move(s.dir * ENEMY_SPEED, 0)
    s.timer -= dt()
    if (s.timer <= 0) {
      s.dir = -s.dir
      s.timer = rand(5)
    }
  })  

  action('ghost', (s) => {
    s.pushOutAll();
    s.move(0 , s.dir * ENEMY_SPEED)
    s.timer -= dt()
    if (s.timer <= 0) {
      s.dir = -s.dir
      s.timer = rand(5)
    }
  }) 
  action('goomba', (s) => {
    s.pushOutAll();
    s.move(s.dir * ENEMY_SPEED, 0)
    s.timer -= dt()
    if (s.timer <= 0) {
      s.dir = -s.dir
      s.timer = rand(5)
    }
  })
  action('goomba1', (s) => {
    s.pushOutAll();
    s.move(0 , s.dir * ENEMY_SPEED)
    s.timer -= dt()
    if (s.timer <= 0) {
      s.dir = -s.dir
      s.timer = rand(5)
    }
  })
  
  //FUNCTIONS

  function spawnKaboom(p, frame){
    const obj = add([
      sprite('explosion', {
        animeSpeed: 10,
        frame: frame,
      }),
      pos(p),
      scale(1.5),
      'kaboom',
      som_explosao.play()
    ])

    obj.pushOutAll();
    wait(0.5, () => {
      destroy(obj);
    })
  }

  function spawnBomber(p){
    const obj = add([sprite('boomber'), ('move'), pos(p), scale(1.5), 'bomber']);
    obj.pushOutAll();
    obj.play("move");

    wait(7, () => {
      destroy(obj);

      obj.dir = vec2(1,0)
      spawnKaboom(obj.pos.add(obj.dir.scale(0)), 12) // center

      obj.dir = vec2(0, -1)
      spawnKaboom(obj.pos.add(obj.dir.scale(20)), 2) // up

      
      obj.dir = vec2(0, 1)
      spawnKaboom(obj.pos.add(obj.dir.scale(20)), 22) // down

      
      obj.dir = vec2(-1, 0)
      spawnKaboom(obj.pos.add(obj.dir.scale(20)), 10) // left

      obj.dir = vec2(1, 0)
      spawnKaboom(obj.pos.add(obj.dir.scale(20)), 14) // rigth

    })
  }

  // COLLISIONS

  player.collides('door', (d) => {
    go("game", {
      level: (level + 1) % maps.length,
      score: scoreLabel.value
    })
  })

  collides('kaboom', 'dangerous', (k,s) => {
    camShake(10);
     wait(4, () => {
       destroy(k)
     })
     destroy(s);
     scoreLabel.value++
     scoreLabel.text = 'Score: ' + scoreLabel.value
  })

  player.collides('kaboom', () => {
    go('lose', {score: scoreLabel.value});
    som_gameover.play()
  })

  collides('kaboom', 'wall-brick', (k,s) => {
    camShake(4);
     wait(1, () => {
       destroy(k)
     })
     destroy(s);
  })

  collides('baloon', 'wall', (s) => {
    s.dir = s.dir;
  })

  collides('slime', 'wall', (s) => {
    s.dir = s.dir;
  })

  collides('ghost', 'wall', (s) => {
    s.dir = -s.dir;
  })

  collides('kaboom', 'wall-brick-dool', (k,s) => {
    camShake(100000000000000000);
    wait(0.1, () => {
      destroy(k);
    })
    destroy(s);
    gameLevel.spawn('t', s.gridPos.sub(0,0))
  })
  
  player.collides('dangerous', () => {
    go('lose', {score: scoreLabel.value})
    som_gameover.play()
  })
})

scene('lose', ( { score }) => {
  add([text('Score: '+ score, 32), origin('center'), pos(width() / 2, height() / 2)])

  keyPress('space', () => {
    go('game', { level: 0, score: 0 });
  })
})

go('game', { level: 0, score: 0 });