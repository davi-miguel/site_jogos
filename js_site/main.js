$("#navbar a, .btn").on("click", function (event) {
   if (this.hash !== "") {
       event.preventDefault();

       const hash = this.hash;

       $("html, body").animate(
           {
               scrollTop: $(hash).offset().top - 100
           },
           800
       );
   }
});

   function logan1(){
      location.href="./Jogos/snake/snake.html";
   }
   function logan12(){
        location.href="./Jogos/breakout/atari_breakout.html"
   }
   function logan16(){
      location.href="./Jogos/menja/menja.html"
   }    
   function logan10(){
        location.href="./Jogos/eclipse/eclipse.html"
   }
   function logan13(){
        location.href="./Jogos/space_shooter/space_shooter.html"
   }
   function logan9(){
      location.href="./Jogos/tetris/index.html"
   }
     function logan8(){
        location.href="https://playcanv.as/p/2OlkUaxF/";
     }
     function logan21(){
      location.href="./Jogos/traffic_racer/traffic.html"
   }
   function logan23(){
      location.href="./Jogos/Dash/Dash.html"
   }
   function logan20(){
      location.href="./Jogos/reator/start_reator.html"
   }
   function logan15(){
      location.href="./Jogos/forca/forca.html"
   }
     function logan25(){
      location.href="./Jogos/Labirinto/index.html"
   }
     function logan26(){
        location.href="./Jogos/memoria/index.html"
     }
     function logan27(){
        location.href="./Jogos/bilhar/bilhar.html"
     }
     function logan28(){
        location.href="./Jogos/Xadrez/xadrez.html"
     }
     function logan30(){
        location.href="./Jogos/sudoku/sudoku.html"
     }
     function logan32(){
        location.href="./Jogos/Dash/Dash.html"
     }
     function logan33(){
        location.href="./Jogos/snake1/snake.html"
     }
     function logan34(){
        location.href="./Jogos/Batalha_Espacial/batalha_espacial.html"
     }
     function logan35(){
      location.href="./Jogos/Genius/index.html"
     }

     function logan36(){
      location.href="./Jogos/battleCity/index.html"
     }

     function logan37(){
      location.href="./Jogos/tower_block/index.html"
     }

     function logan38(){
      location.href="./Jogos/Run_Adventure/index.html"
     }

     function logan39(){
      location.href="./Jogos/SuperMarioBros/super_mario_bros_game.html"
     }