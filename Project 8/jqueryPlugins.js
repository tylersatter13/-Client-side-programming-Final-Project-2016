/**
 * Created by tylersatter on 3/4/16.
 */
$( document ).ready(function() {

    $('#show').hide();//hides the button to show the slide show since the slide show
   $('.slideshow').cycle({
        fx: 'shuffle' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
    });
    $('#hide').click(function() {
        $('.slideshow').hide();
        $('#hide').hide();//hides the hide button since the slid show is alread hidden
        $('#show').show();
    });
    $('#show').click(function(){
       $('.slideshow').show();
        $('#hide').show();
        $('#show').hide();//hides the show button since the slide show is already showing

        $(function() {
            $('#main-menu').smartmenus({
                subMenusSubOffsetX: 1,
                subMenusSubOffsetY: -8
            });
        });
    });



});
