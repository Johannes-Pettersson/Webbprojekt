$(document).ready(function(){
    
    $("div").click(function(){
        console.log("hej");
        anime({
            targets: 'div',
            rotate: '5turn',
            duration: 8000,
            loop: 'true'
        });
    });
})

