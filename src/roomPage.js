let rooms = [];


const GenerateUrl = () => {
     
       for (let i = 0; i < 15; i++ ) {
       
        rooms.push(require("./images/rooms/room_"+i+".jpg"));
        
    }
    console.log(rooms);
}

const GenerateImg = () => {
    GenerateUrl();
    let div;
    let image;
    rooms.forEach(e => {
        div = document.createElement('div');
        div.classList.add("container-gallery__block");
        document.getElementById('containerGallery').appendChild(div);
        image = document.createElement('img');
        image.src = e;
              div.appendChild(image);
    })
}


addEventListener("DOMContentLoaded", function () {
    GenerateImg();
});


