$(document).ready(function(){
    
    $(".navlink").mouseenter(function(){
        hoverEnter(this);
    });

    $(".navlink").mouseleave(function(){
        hoverLeave(this);
    });

    function hoverEnter(el){
        anime({
            targets: el,
            scale: 1.1,
            duration: 600,
            elasticity: 400
          });
    }

    function hoverLeave(el){
        anime({
            targets: el,
            scale: 1.0,
            duration: 600,
            elasticity: 300
          });
    }



});
