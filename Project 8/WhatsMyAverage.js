/**
 * Created by tylersatter on 3/11/16.
 */
$(document).ready(function(){
 $("#searchAverage").click(function() {
     var bowlers= [];
     var idRow;
     var idColumn;
     bowlers[0]=["Austin Camarillo","Sophmore","155"];
     bowlers[1]=["Tony Lopez", "Senior","146"];
     bowlers[2]=["Jason Tran", "Senior", "144"];


     var name =$(".name").val();
    for(var i =0; i< bowlers.length; i++) {
        if (name === bowlers[i][0]) {
            idRow=i;
            break;
        }
        else {
        }
    }
   $("#bowlerName").text("Bowler Name: "+bowlers[idRow][0]);
   $("#bowlerName").letterfx({"fx":"spin","timing":70});

     $("#bowlerGrade").text("Bowler Grade: "+bowlers[idRow][1]);
     $("#bowlerGrade").letterfx({"fx":"spin","timing":90});

     $("#bowlerAverage").text("Bowler Average: "+bowlers[idRow][2]);
     $("#bowlerAverage").letterfx({"fx":"spin","timing":120});

 });

});