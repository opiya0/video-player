let video=document.getElementById("video")
let control=document.getElementById("control")
let video2=document.getElementById("video2")
control.addEventListener("mousemove",function(){
control.style.opacity="65%";
})
control.addEventListener("mouseleave",function(){
    control.style.opacity="0%";
    })
    function playvideo(){
    if(video2.paused){
        video2.play();
    }
    else{
        video2.pause();
    }
    
    }
    
    
