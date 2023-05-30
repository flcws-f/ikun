function dp(){
gt1=document.getElementById("kkgtp")
if(gt1.hasAttribute("hidden")){
gt1.removeAttribute("hidden");
}
else{
gt1.setAttribute("hidden","hidden");
}
}
window.onload=function(){
var aud1=new Audio("1.mp3");
aud1.loop="loop";
aud1.play();
var aud2=new Audio("2.mp3");
aud2.play();
}