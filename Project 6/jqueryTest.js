
$(document).ready(function(){
   $("#box").css({'height': '100px','width':'100px','background-color':'azure','position':'absolute'});
    $control=1;
    $("#box").mouseover(function(){
        if($control== 1) {
            $control=2;
            $("#box").animate({'left': '1000px'},function(){
            })
       }
        else {
            $control = 1;
            $("#box").animate({'left': '5px'});
        }
    });
});
