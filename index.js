const columns = 10;
const rows = 20;
const speed = 400;
var gameover = false;
const game = document.querySelector("#game")
var map = {}
const board = new Board()

function a(){
    if(!gameover){
        setTimeout(_=>{
            board.movePiece("down")
            a();
        }, 1000)
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
    if(map.ArrowUp){
        board.rotatePiece()
    }
    if(map.z){
        board.rotatePiece()
        board.rotatePiece()
        board.rotatePiece()
    }
    if(map[' ']){
        board
    }
}

a();