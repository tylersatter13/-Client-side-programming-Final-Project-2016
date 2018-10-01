/**
 * Created by tylersatter on 3/11/16.
 */
$(document).ready(function(){

    $(".logo").letterfx({"fx":"fly-right fly-bottom spin","timing":50});
    $('#submit').click(function(){

        var sportFee=65;
        var ticketsSold = $('#tickets').val();
        var moneyPerTicket=6;
        var moneyEarned = moneyPerTicket*ticketsSold;
        sportFee=sportFee-moneyEarned;

         if (sportFee <=0){
            $('#results').text("You have covered your sport fee!");
             $('#results').letterfx({"fx":"fly-top"});
        }
        else {
            $('#results').text("You still owe: $" + sportFee);
             $('#results').letterfx({"fx":"spin","timing":90});
         }
        $('#clear').click(function(){
            $('#tickets').val(0);
            $('#results').text("");

        });
});
});