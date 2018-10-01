/**
 * Created by tylersatter on 3/4/16.
 */
$(document).ready(function() {

    $('.days').each(function(){
        var event = $(this).text();

        $(this).next().text(calculateDaysLeft(event));
    });
     setInterval(function(){
         $('.counter').text("Days until the 2016-2017 season starts: "+fullTimeLeft("10/07/2016"));

     },1000);

});


   function calculateDaysLeft(event) {
       var time= howMuchTime(event);
       var daysLeft = Math.floor(time/(1000*60*60*24));
       return daysLeft;

   }
    function fullTimeLeft(event){
        var time=howMuchTime(event);
        var timer=countdown(time);
        return timer;
    }
    function howMuchTime(event){
        var c = new Date();
        var eventMonth = parseInt(event.substring(0, 2));
        var eventDay = parseInt(event.substring(3, 5));
        var eventYear = parseInt(event.substring(6, 10));


        var e = new Date(eventYear, eventMonth - 1, eventDay);//months start with zero when setting the date in javascript

        var time = Date.parse(e) - Date.parse(c);
        return time;
    }
    function countdown(time){

       var daysLeft = Math.floor(time/(1000*60*60*24));
       var seconds= ("0"+ Math.floor(time/1000)%60).slice(-2);
       var minutes=("0"+ Math.floor(time/1000/60)%60).slice(-2);
       var hours=("0"+ Math.floor(time/(1000*60*60))).slice(-2);

        return daysLeft+" days"+" "+" "+hours+" hours"+ " "+minutes+ " minute(s)"+ " "+seconds+" seconds";
   }
