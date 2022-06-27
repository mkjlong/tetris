const columns = 10;
const rows = 20;
const speed = 1000;
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
}
document.addEventListener("keydown",function(e){
    if(e.key == "ArrowUp"){
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
})

a();