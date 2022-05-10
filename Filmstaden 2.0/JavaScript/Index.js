$(document).ready(function(){
    
    $(".hover").mouseenter(function(){
        hoverEnterEffect(this);
    });

    $(".hover").mouseleave(function(){
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

    let slider1State = 1;
    let slider2State = 1;
    let slider3State = 1;
    let slider4State = 1;

    $('.arrowLeft').click(function(e){

        e.preventDefault();

        switch($(this).parent().parent().attr("id")){
            case "slider1":
                switch(slider1State){
                    case 1:
                        break;
                    case 2:
                        $(this).parent().parent().find("#slide2").addClass("hidden");
                        $(this).parent().parent().find("#slide1").removeClass("hidden");

                        $(this).parent().find('.stageShower').attr('src', 'Assets/scrollstage1.png');

                        slider1State--;
                        break;
                    case 3:
                        $(this).parent().parent().find("#slide3").addClass("hidden");
                        $(this).parent().parent().find("#slide2").removeClass("hidden");

                        $(this).parent().find('.stageShower').attr('src', 'Assets/scrollstage2.png');

                        slider1State--;
                        break;
                }
                break;
            case "slider2":
                switch(slider2State){
                    case 1:
                        break;
                    case 2:
                        $(this).parent().parent().find("#slide2").addClass("hidden");
                        $(this).parent().parent().find("#slide1").removeClass("hidden");

                        $(this).parent().find('.stageShower').attr('src', 'Assets/scrollstage1.png');

                        slider2State--;
                        break;
                    case 3:
                        $(this).parent().parent().find("#slide3").addClass("hidden");
                        $(this).parent().parent().find("#slide2").removeClass("hidden");

                        $(this).parent().find('.stageShower').attr('src', 'Assets/scrollstage2.png');

                        slider2State--;
                        break;
                }
                break;
            case "slider3":
               switch(slider3State){
                    case 1:
                        break;
                    case 2:
                        $(this).parent().parent().find("#slide2").addClass("hidden");
                        $(this).parent().parent().find("#slide1").removeClass("hidden");

                        $(this).parent().find('.stageShower').attr('src', 'Assets/scrollstage1.png');


                        slider3State--;
                        break;
                    case 3:
                        $(this).parent().parent().find("#slide3").addClass("hidden");
                        $(this).parent().parent().find("#slide2").removeClass("hidden");

                        $(this).parent().find('.stageShower').attr('src', 'Assets/scrollstage2.png');


                        slider3State--;
                        break;
                }
                break; 
            case "slider4":

                switch(slider4State){
                    case 1:
                        break;
                    case 2:
                        $(this).parent().parent().find("#slide2").addClass("hidden");
                        $(this).parent().parent().find("#slide1").removeClass("hidden");

                        $(this).parent().find('.stageShower').attr('src', 'Assets/scrollstage1.png');


                        slider4State--;
                        break;
                    case 3:
                        $(this).parent().parent().find("#slide3").addClass("hidden");
                        $(this).parent().parent().find("#slide2").removeClass("hidden");

                        $(this).parent().find('.stageShower').attr('src', 'Assets/scrollstage2.png');


                        slider4State--;
                        break;
                }
                break;
        }
    });

    $('.arrowRight').click(function(e){

        e.preventDefault();
        
        switch($(this).parent().parent().attr("id")){
            case "slider1":
                switch(slider1State){
                    case 1:
                        $(this).parent().parent().find("#slide1").addClass("hidden");
                        $(this).parent().parent().find("#slide2").removeClass("hidden");

                        $(this).parent().find('.stageShower').attr('src', 'Assets/scrollstage2.png');

                        slider1State++;
                        break;
                    case 2:
                        $(this).parent().parent().find("#slide2").addClass("hidden");
                        $(this).parent().parent().find("#slide3").removeClass("hidden");

                        $(this).parent().find('.stageShower').attr('src', 'Assets/scrollstage3.png');

                        slider1State++;
                        break;
                    case 3:
                        break;
                }
                break;
            case "slider2":
                switch(slider2State){
                    case 1:
                        $(this).parent().parent().find("#slide1").addClass("hidden");
                        $(this).parent().parent().find("#slide2").removeClass("hidden");

                        $(this).parent().find('.stageShower').attr('src', 'Assets/scrollstage2.png');

                        slider2State++;
                        break;
                    case 2:
                        $(this).parent().parent().find("#slide2").addClass("hidden");
                        $(this).parent().parent().find("#slide3").removeClass("hidden");

                        $(this).parent().find('.stageShower').attr('src', 'Assets/scrollstage3.png');

                        slider2State++;
                        break;
                    case 3:
                        break;
                }
                break;
            case "slider3":
                switch(slider3State){
                    case 1:
                        $(this).parent().parent().find("#slide1").addClass("hidden");
                        $(this).parent().parent().find("#slide2").removeClass("hidden");

                        $(this).parent().find('.stageShower').attr('src', 'Assets/scrollstage2.png');

                        slider3State++;
                        break;
                    case 2:
                        $(this).parent().parent().find("#slide2").addClass("hidden");
                        $(this).parent().parent().find("#slide3").removeClass("hidden");

                        $(this).parent().find('.stageShower').attr('src', 'Assets/scrollstage3.png');

                        slider3State++;
                        break;
                    case 3:
                        break;
                }
                break; 
            case "slider4":
                switch(slider4State){
                    case 1:
                        $(this).parent().parent().find("#slide1").addClass("hidden");
                        $(this).parent().parent().find("#slide2").removeClass("hidden");

                        $(this).parent().find('.stageShower').attr('src', 'Assets/scrollstage2.png');

                        slider4State++;
                        break;
                    case 2:
                        $(this).parent().parent().find("#slide2").addClass("hidden");
                        $(this).parent().parent().find("#slide3").removeClass("hidden");

                        $(this).parent().find('.stageShower').attr('src', 'Assets/scrollstage3.png');

                        slider4State++;
                        break;
                    case 3:
                        break;
                }
                break;
        }
    });


    $('#menubutton').click(function(e){
        e.preventDefault();

        
    });


    /*
    $('img').click(function(){
        if(this.parentNode.tagName != "A"){
        anime({
            targets:this,
            easing: 'easeInOutQuad',
            duration: '500',
            width: '10em'
        });
    }
    });
*/

});
