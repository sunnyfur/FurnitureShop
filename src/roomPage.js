let rooms = [];


const GenerateUrl = () => {
     
       for (let i = 0; i < 15; i++ ) {
       
        rooms.push(require("./images/rooms/room_"+i+".jpg"));
        
    }
    console.log(rooms);
}

const  clickRoomsImg = (element) => {
document.getElementById('containerrommglary').classList.remove('container-roomgalary_displayNone');
 document.getElementById('containerrommglary').classList.add('container-roomgalary');
 document.getElementById('RoomImgBig').src=element.src;
  
  }

const GenerateImg = () => {
    GenerateUrl();
    let div;
    let image;
    let count=0;
    rooms.forEach(e => {
        div = document.createElement('div');
        div.classList.add("container-gallery__block");
        document.getElementById('containerGallery').appendChild(div);
        image = document.createElement('img');
        image.src = e;
      
        div.appendChild(image);
        image.addEventListener("click", (e) => clickRoomsImg(e.target));
    })
}
document.getElementById('shapeButton').onclick = function () {
    document.getElementById('containerrommglary').classList.remove('container-roomgalary');
 document.getElementById('containerrommglary').classList.add('container-roomgalary_displayNone');
   
};


const RoomsSlidersR=()=>{
    let Way;
    Way=document.getElementById('RoomImgBig').src;
    let index;
    index=rooms.indexOf(Way);
    if(index==14)
    document.getElementById('RoomImgBig').src=rooms[0];
else
    document.getElementById('RoomImgBig').src=rooms[index+1];

}
const RoomsSlidersL=()=>{
    
    let Way;
    Way=document.getElementById('RoomImgBig').src;
    let index;
    index=rooms.indexOf(Way);
    console.log(index);
    if(index===0)
        document.getElementById('RoomImgBig').src=rooms[(rooms.length-1)];
    else
    document.getElementById('RoomImgBig').src=rooms[index-1];

}

document.getElementById('righthapeButton').addEventListener("click",function () {
    RoomsSlidersR();
} );
document.getElementById('leftthapeButton').addEventListener("click",function () {
    RoomsSlidersL();
} );

addEventListener("DOMContentLoaded", function () {
    GenerateImg();
});


