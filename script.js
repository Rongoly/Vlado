let player = new Image();
let spike = new Image();
let backround = new Image();

player.src =  "./Image/player.png"
spike.src = "./Image/spike.png"
backround.src = "./Image/backround.jpg"

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 512;

let xPos = canvas.width / 5
let yPos = canvas.height / 1.3
let gravity = 5;
let valY = yPos;
let bgX = 0;

setInterval(() => {
    ctx.drawImage(backround, bgX,  0, 1024, 512);
    ctx.drawImage(backround, 1024 + bgX,  0, 1024, 512);
    ctx.drawImage(player, xPos, yPos, 50, 50);
    bgX -= 5;

    if (bgX <= -1024){
        bgX = 0;
    }

    if(jumpState){
        velY -= gravity * 2;
        yPos = velY;
        if (yPos <= canvas.height - 200) {
            jumpState = false;
        }
    } else if (yPos >= canvas.height - 50 ) {
    } else {
        velY
    }

    if (yPos >= canvas.height - 50){

    } else{
    velY += gravity
    yPos = valY
    }

}, 33);

canvas.addEventListener("clack", () =>{

    if(yPos >= canvas.height - 50){
        jumpState = true
    }
})
