

function mouseOver() {

var textToString= document.getElementById("text").innerHTML;

function toBold(x){
    return x.fontcolor("yellow") }
var change =textToString.replace(/Liberty/,toBold);
var change =change.replace(/university/gi,toBold);
var change =change.replace(/Students/,toBold);
var change =change.replace(/world/gi,toBold);
var change = change.replace(/Christian/,toBold);
document.getElementById("text").innerHTML=change;
}
document.getElementById("text").onmouseover = function(){mouseOver()};