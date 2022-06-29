const shapes = ["L","J","I","T","J","S","Z","O"]

class Board{
    constructor(){
        this.tile = [...Array(20)].map(x=>[...Array(10)].map(x=>''))
        for(const row of [...Array(rows).keys()]){
            for(const column of [...Array(columns).keys()]){
                const element = document.createElement("div");
                element.classList.add("game-tile")
                element.setAttribute("row",row);
                element.setAttribute("column",column);
                game.appendChild(element)
            }
        }
        this.heldShape = null;
        this.placeShape(this.getRandomShape());
    }
    getTile(row, column){
        return document.querySelector(`.game-tile[row='${row}'][column='${column}']`)
    }
    getRandomShape(){
        return shapes[Math.floor(Math.random()*shapes.length)]
    }
    placeShape(shape){
        const arr = {
            L:[[1,5],[1,4],[1,6],[2,4]],
            J:[[1,5],[1,4],[1,6],[2,6]],
            I:[[1,5],[1,4],[1,6],[1,7]],
            T:[[1,5],[1,4],[1,6],[2,5]],
            S:[[1,5],[1,4],[2,5],[2,6]],
            Z:[[1,5],[1,6],[2,5],[2,4]],
            O:[[1,5],[1,6],[2,5],[2,6]]
        }[shape]
        for(var element of [this.getTile(...arr[0]),this.getTile(...arr[1]),this.getTile(...arr[2]),this.getTile(...arr[3])]){
            if(element.getAttribute("shape")){    
                gameover = true;
                return;
            }
        }
        for(var element of [this.getTile(...arr[0]),this.getTile(...arr[1]),this.getTile(...arr[2]),this.getTile(...arr[3])]){
            element.setAttribute("shape", shape)
            element.classList.add("active")
        }
        this.shape = shape;
        this.getTile(...arr[0]).classList.add("anchor");
        this.tetris();
    }
    removeActive(){
        for(var element of Array.from(document.getElementsByClassName("active"))){
            element.classList.remove("active", "anchor")
        }
        this.placeShape(this.getRandomShape());
    }
    movePiece(direction){
        const tiles = Array.from(document.getElementsByClassName('active'))
        var legal = this.checkLegal(direction);
        if(!legal)return false;
        const anchor = document.getElementsByClassName("anchor")?.[0];
        anchor?.classList?.remove("anchor");
        
        //add anchor to thing below
        this.getTile(+anchor?.getAttribute("row")+{left:0,right:0,down:1}[direction], +anchor?.getAttribute("column")+{left:-1,right:1,down:0}[direction])?.classList?.add("anchor");
        for(var element of tiles){
            element.classList.remove("active");
            element.removeAttribute("shape");
        }
        for(var [element,shape] of legal){
            element.classList.add("active");
            element.setAttribute("shape", shape);
        }
        return true;
    }
    checkLegal(direction){
        const tiles = Array.from(document.getElementsByClassName('active'))
        const newSpot = [];
        for(const element of tiles){
            const row = +element.getAttribute("row");
            const column = +element.getAttribute("column");
            const shape = element.getAttribute("shape")
            const destination = this.getTile(row+{left:0,right:0,down:1}[direction], column+{left:-1,right:1,down:0}[direction]);
            //if pushing on the side of the walls or towards the ground
            if(destination == null){
                if(direction == "down"){
                    this.removeActive();
                }
                return false;
            }
            //if pushing towards a shape
            if(destination.getAttribute("shape") && !destination.classList.contains("active")){
                if(direction=="down"){
                    this.removeActive();
                }
                return false;
            }
            newSpot.push([destination, shape]);

        }
        return newSpot;
    }
    tetris(){
        const tiles = Array.from(document.querySelectorAll('.game-tile:not(.active)'))
        
        const tetrisRows = []
        for(var row of [...Array(20).keys()].reverse()){
            for(var _ of [...Array(4).keys()]){//1,1,1,1,2,2,2,2,3,3,3,3 etc...
                if(Array.from(document.querySelectorAll(`.game-tile[row='${row}']`)).every(element=>element.getAttribute("shape")&&!element.classList.contains("active"))){
                    if(tetrisRows.length>3)continue;
                    if(!tetrisRows.includes(row)){
                        tetrisRows.push(row)
                    }
                    for(var element of Array.from(document.querySelectorAll(`.game-tile[row='${row}']:not(.active)`))){
                        element.removeAttribute("shape");
                    }
                    const newSpot = [];
                    for(var element of document.querySelectorAll(`.game-tile[shape]:not(.active)`)){
                        const row2 = +element.getAttribute('row');
                        const column2 = +element.getAttribute('column');
                        if(row2>=row)continue;
                        const destination = this.getTile(row2+1, column2);
                        const shape = element.getAttribute('shape');
                        newSpot.push([destination,shape]);
                        element.removeAttribute('shape');
                    }
                    for(var[element,shape] of newSpot){
                        if(shape==null)return;
                        element.setAttribute('shape',shape)
                    }
                }
            }
        }
    }
    positionRelativeTo(anchor, element){
        const anchorRow = +anchor.getAttribute("row")
        const anchorColumn = +anchor.getAttribute("column")
        const pieceRow = +element.getAttribute("row")
        const pieceColumn = +element.getAttribute("column")
        return [pieceRow-anchorRow, pieceColumn-anchorColumn]
    }
    rotatePiece(){
        if(board.shape == "O")return false;
        const newSpot = []
        for(var element of document.querySelectorAll(`.game-tile.active:not(.anchor)`)){
            const anchor = document.querySelector(`.anchor`);
            const anchorRow = +anchor.getAttribute('row')
            const anchorColumn = +anchor.getAttribute('column')
            const row = +element.getAttribute('row')
            const column = +element.getAttribute('column')
            const shape = element.getAttribute('shape')
            var [relativeX, relativeY] = this.positionRelativeTo(anchor,element);
            relativeX = relativeX+relativeY
            relativeY = relativeX-relativeY
            relativeX = relativeX-relativeY
            relativeY = -relativeY
            const destination = this.getTile(anchorRow+relativeX,anchorColumn+relativeY)
            if(destination==null)return false;
            if(destination.getAttribute('shape') && !destination.classList.contains('active'))return false;
            newSpot.push([destination,shape])
        }
        for(var element of document.querySelectorAll(`.game-tile.active:not(.anchor)`)){
            element.removeAttribute('shape')
            element.classList.remove('active')
        }
        for(var[element,shape] of newSpot){
            element.setAttribute('shape',shape)
            element.classList.add('active')
        }
    }
    swapHeldShape(){
        const shape = this.shape
        for(var element of document.querySelectorAll(`.game-tile.active`)){
            element.classList.remove("active")
            element.removeAttribute("shape")
        }
        this.placeShape(this.heldShape??this.getRandomShape())
        document.querySelector("#helditem").src = `./assets/${shape}.png`
        this.heldShape = shape
    }
}