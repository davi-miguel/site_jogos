// Smooth Scrolling
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

// Sticky menu background
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});


function logan1(){
    location.href="snake.html";
 }
 function logan2(){
        location.href="game.html";
     }
     function logan3(){
        location.href="ping_pong.html";
     }
     function logan4(){
        location.href="./nave.html";

     }
     function logan5(){
        location.href="flappy_bird.html";
     }

     function logan6(){
        location.href="bola_yellow.html";
     }
