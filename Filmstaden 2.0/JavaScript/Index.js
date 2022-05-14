$(document).ready(function(){
    
    
    //Detta är koden för den hover effect som syns på bland annat texterna i 
    //nav fältet när man drar sin mus och håller över länken
    function hoverEnterEffect(el){
        anime({
            targets: el,
            scale: 1.1,
            duration: 600,
            elasticity: 400
          });
    }

    //Detta är koden för den hover effect som syns på bland annat texterna i 
    //nav fältet när man drar bort sin mus från länken
    function hoverLeaveEffect(el){
        anime({
            targets: el,
            scale: 1.0,
            duration: 600,
            elasticity: 300
          });
    }
    
    //denna kod kör hover effecten när man håller sin mus över något element som har 
    //klassen hover på sig
    $(".hover").mouseenter(function(){
        hoverEnterEffect(this);
    });

    $(".hover").mouseleave(function(){
        hoverLeaveEffect(this);
    });


    /*här nedan följer all kod för de "slideshows" som finns med alla filmerna.
    Det ända som den igentligen gör är att ta bort och sätta dit klassen "hidden"
    på de olika slidesen. Läser man koden så bör man förstå vad som händer. 
    Därför kommenterar jag inte mer än detta*/
    let slider1State = 1;
    let slider2State = 1;
    let slider3State = 1;
    let slider4State = 1;

    //Koden för vad som händer när man klickar på vänsterpilen
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

    //koden som bestämmer vad som händer när man klickar på högerpilen
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


    //Här följer koden för sidomenyn som visas när man klickar på de tre strecken till vänster på nav fältet
    let showingSideMenu = false;

    $('#menubutton').click(function(e){

        //detta för att inte sidan ska refreshas när man klickar på menyknappen
        e.preventDefault();
        
        if(showingSideMenu){
            //dölj sidomenyn
              $('.sidemenu').addClass('hidden');
              showingSideMenu = false;
        }else{
            //visa sidomeyn
            $('.sidemenu').removeClass('hidden');
            showingSideMenu = true;
        }
        
    });

});
