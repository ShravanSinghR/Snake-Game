//game constants
const canvas=document.getElementById('can');
const ctx =canvas.getContext("2d");
const foodsound = new Audio('food.mp3');
const gameover = new Audio('end.wav');
const move = new Audio('turns.wav');
let score = 0;
let speed = 7;
//snake
let headX = 12;
let headY = 10;
//canvas
let count= 40;
let size = canvas.width/count  ;
//movement
let Xvel=0;
let Yvel=0;
//canvas in centre
var style = canvas.style;
style.marginLeft = "auto";
style.marginRight = "auto";
var parentStyle = canvas.parentElement.style;
parentStyle.textAlign = "center";
parentStyle.width = "100%";

//food
let FX=11;
let FY=10;





//gamefunction
function game() {
    Screen();
    changePosition();

    drawfood();
    drawSnake();
    collision();
    setTimeout(game, 1000/speed);
    
}
game();

// display canvas
function Screen(){
 ctx.fillStyle = "black";
 ctx.fillRect(0,0, canvas.width, canvas.height);
}


//display food
function drawfood(){
    ctx.fillStyle = "red";
    ctx.fillRect(FX* count , FY * count, size , size)
}

//display snake
function drawSnake() {
    // console.log('done')
    ctx.fillStyle = "green";
    ctx.fillRect(headX * count ,headY * count, size , size)

}

//move snake
function changePosition(){
    headX = headX + Xvel;
    headY = headY + Yvel;
}

//eating apple
function collision() {
    if(FX === headX && FY === headY){
        FX = Math.floor(Math.random()* 20);
        FY = Math.floor(Math.random()* 20);
    }
}

//keyboard input
document.body.addEventListener('keydown', keyDown)
function keyDown(event){
    //up
    if (event.keyCode==38){
        if (Yvel==1) 
         return;
        Yvel = -1;
        Xvel = 0;
    }
    //down
    if (event.keyCode==40){
        if (Yvel==-1) 
        return;
        Yvel = 1;
        Xvel = 0;
    }
    //left
    if (event.keyCode==37){
        if (Xvel==1) 
        return;
        Yvel = 0;
        Xvel = -1;
    }
    //right
    if (event.keyCode==39){
        if (Xvel==-1) 
        return;
        Yvel = 0;
        Xvel = 1;
    }
}
