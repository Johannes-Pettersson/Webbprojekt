$(document).ready(function(){
    
    $(".navlink").mouseenter(function(){
        anime({
            targets: this,
            scale: 1.2,
            duration: 600,
            elasticity: 400
          });
    });

    $(".navlink").mouseleave(function(){
        anime({
            targets: this,
            scale: 1.0,
            duration: 600,
            elasticity: 300
          });
    });

});
