

var rect=document.querySelector(".rect")
var show=document.querySelector(".show")
rect.addEventListener("mousemove",function(event){
    show.innerHTML="Coordinates: ("+event.clientX+","+event.clientY+")"
    show.style.display="block"
})
rect.addEventListener("mouseout",function(){
    show.style.display="none"
})
