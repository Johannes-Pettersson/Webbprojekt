$(document).ready(function(){
    
    $(".navlink").mouseenter(function(){
        hoverEnterEffect(this);
    });

    $(".navlink").mouseleave(function(){
        hoverLeaveEffect(this);
    });

    function hoverEnterEffect(el){
        anime({
            targets: el,
            scale: 1.1,
            duration: 600,
            elasticity: 400
          });
    }

    function hoverLeaveEffect(el){
        anime({
            targets: el,
            scale: 1.0,
            duration: 600,
            elasticity: 300
          });
    }

    $('img').click(function(){
        anime({
            targets:this,
            easing: 'easeInOutQuad',
            duration: '500',
            width: '10em'
        });
    });


});
