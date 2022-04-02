const ZoomImages = ()=>{
    
let modal = document.getElementById('myModal');
let images = document.querySelectorAll('.insp__item');
let modalImg = document.getElementById("imgZoom");

for (let i=0; i<images.length; i++){
images[i].onclick =  function (event){
    (event).preventDefault();
    modalImg.classList.remove('out');
    modal.classList.add('modalBlock');
    modalImg.src=this.src;  
}
}
modal.onclick = function(event){
    (event).preventDefault();
    modalImg.classList.add('out');
    setTimeout(function(){
    modal.classList.remove('modalBlock');
    // modal.classList.add ('modalNone');
    // modalImg.className = "modal-content";
    modalImg.src=""; 
}, 400)
}
}
export {
    ZoomImages
}