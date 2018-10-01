/**
 * Created by tylersatter on 2/29/16.
 */
$(document).ready(function(){
    $("#flip").mouseenter(function(){// acts as a menu with a flap
        $("#panel").slideDown("slow");
    });
    $("#flip").mouseleave(function(){
        $("#panel").slideUp("slow");
    });
    $("button").click(function(){
       $('#square').animate({height: '150px',width: '900px'});// changes the size of the square
        $('#square').css("color","white");//makes text visible
        $('#square').animate({fontSize: '10em'}, "slow");

    });
});
