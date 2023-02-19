var slide=document.getElementsByClassName("slide");
var dot=document.getElementsByClassName("dot");
var next=document.querySelector(".next");
var prev=document.querySelector(".prev");
var n=0;
var i;

function disno(){
for(i=0; i<slide.length ;i++) {
    slide[i].style.display="none";
}
}
function noactive(){
    for(i=0;i<dot.length;i++){
        dot[i].classList.remove("active");
    }
}


next.addEventListener("click",function(e){
    e.preventDefault();
    n++;
    if(n>slide.length-1){
        n=0;
    }
    disno();
    noactive();
    slide[n].style.display="block";
    dot[n].classList.add("active");


})


prev.addEventListener("click",function(e){
    e.preventDefault();
    n--;
    if(n<0){
        n=slide.length-1;
    }
    disno();
    noactive();
    slide[n].style.display="block";
    dot[n].classList.add("active");


})
setInterval(function(){
    n++;
    if(n>slide.length-1){
        n=0;
    }
    disno();
    noactive();
    slide[n].style.display="block";
    dot[n].classList.add("active");



},3000)
