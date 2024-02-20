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
      location.href="./jogos/snake/snake.html";
   }
   function logan12(){
        location.href="./jogos/breakout/atari_breakout.html"
   }
   function logan16(){
      location.href="./jogos/menja/menja.html"
   }    
   function logan10(){
        location.href="./jogos/eclipse/eclipse.html"
   }
   function logan13(){
        location.href="./jogos/space_shooter/space_shooter.html"
   }
   function logan9(){
      location.href="./jogos/tetris/index.html"
   }
     function logan8(){
        location.href="https://playcanv.as/p/2OlkUaxF/";
     }
     function logan21(){
      location.href="./jogos/traffic_racer/traffic.html"
   }
   function logan23(){
      location.href="./jogos/Dash/Dash.html"
   }
   function logan20(){
      location.href="./jogos/reator/start_reator.html"
   }
   function logan15(){
      location.href="./jogos/forca/forca.html"
   }
     function logan25(){
      location.href="./jogos/Labirinto/index.html"
   }
     function logan26(){
        location.href="./jogos/memoria/index.html"
     }
     function logan27(){
        location.href="./jogos/bilhar/bilhar.html"
     }
     function logan28(){
        location.href="./jogos/Xadrez/xadrez.html"
     }
     function logan30(){
        location.href="./jogos/sudoku/sudoku.html"
     }
     function logan32(){
        location.href="./jogos/Dash/Dash.html"
     }
     function logan33(){
        location.href="./jogos/snake1/snake.html"
     }
     function logan34(){
        location.href="./jogos/Batalha_Espacial/batalha_espacial.html"
     }
     function logan35(){
      location.href="./jogos/Genius/index.html"
     }

     function logan36(){
      location.href="./jogos/battleCityindex.html"
     }

     function logan37(){
      location.href="./jogos/tower_block/index.html"
     }

     function logan38(){
      location.href="./jogos/Run_Adventure/index.html"
     }

     function logan39(){
      location.href="./jogos/SuperMarioBros/super_mario_bros_game.html"
     }