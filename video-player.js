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



    function movevideo(n){
     video2.currentTime+=(n*1);
    }

     
document.onkeydown=function(e){
    switch(e.key){
        case "ArrowUp":
     if(video2.volume <1){
        video2.volume=(video2.volume+0.2).toFixed(1);//ta 1 ragm ashar neshon mide
     }
     case "ArrowDown":
        if(video2.volume >0){
            video2.volume=(video2.volume-0.2).toFixed(1);//ta 1 ragm ashar neshon mide
        }
    }


}
    
    
