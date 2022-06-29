const columns = 10;
const rows = 20;
var speed = 1000;
var gameover = false;
const game = document.querySelector("#game")
var map = {}
const board = new Board()

function a(){
    if(!gameover){
        setTimeout(_=>{
            board.movePiece("down")
            a();
        }, speed)
    }
}

document.onkeydown = document.onkeyup = function(e){
    e = e||window.event;
    map[e.key]=e.type=='keydown';
}
document.addEventListener("keydown",function(e){
    if(map.ArrowUp){
        board.rotatePiece();
    }else if(e.key == "z"){
        board.rotatePiece();
        board.rotatePiece();
        board.rotatePiece();
    }else if(e.key == "c"){
        board.swapHeldShape();
    }if(e.key == " "){
        for(var index in [...Array(20).keys()]){
            if(!board.movePiece("down")){
                break;
            }
        }
    }
    if(map.ArrowDown){
        board.movePiece("down")
    }
    if(map.ArrowLeft){
        board.movePiece("left")
    }
    if(map.ArrowRight){
        board.movePiece("right")
    }
    if(map[' ']){
        board
    }
})

a();




$("#slider").on("input change", function(){
    speed = this.value;
})