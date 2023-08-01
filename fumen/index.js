var fumen = "v115@qhA8DeAgH"
var selectedColor = "8"
var autoColor = false
var pages = decoder.decode(fumen)
var pieces = [];
var page = 0;
const newPage = decoder.decode("v115@qhA8DeAgH")[0]

for(i=22;i>=0;i--){
    for(j=0;j<10;j++){
        cell = document.createElement("cell")
        cell.setAttribute("color",0)
        cell.setAttribute("index",i*10+j)
        $("#grid").append(cell)
    
        cell.onmouseover=cell.onmousedown=clickCell;

    }
}

document.addEventListener("contextmenu",function(e){
    e.preventDefault()
})


actions = []

mode = 1

function clickCell(e){
    e.preventDefault()
    var index = ($(this).attr("index"))


    if(autoColor){
        xPos = index.substring(index.length-1)
        yPos = index.substring(0,index.length-1)
        console.log(xPos, yPos)
        if(e.type=="mousedown"){
            pieces.push()
        }


        return;
    }


    if(!e.buttons)return;
    if(e.buttons==2 || ((this.getAttribute("color")==selectedColor)) && (e.type=="mousedown" || mode == 0)){
        this.setAttribute("color", 0)
        pages[page]._field.field.pieces[index] = 0
        mode = 0;
    }else if((e.buttons==1) && ((e.type=="mousedown" || mode == 1))){
        this.setAttribute("color", selectedColor)
        pages[page]._field.field.pieces[index] = +selectedColor
        mode = 1;
    }

    if(e.buttons==4 && e.type == "mousedown"){
        if(this.getAttribute("color")==0)return;
        selectedColor = this.getAttribute("color")
    }



    updateFumen();
}




function updateFumen(){
    fumen = encoder.encode(pages)
}



function loadPage(){
    console.log(pages.length, page)
    if(pages.length<=page){
        pages[page]=pages[page-1]
    }
    $("cell").each(function(){
        index = +this.getAttribute("index")
        this.setAttribute("color" , pages[page]._field.field.pieces[index])
    })
}


document.addEventListener("keydown",function(e){
    if(e.repeat)return;
    if(e.key.toUpperCase() in colorMapping){
        selectedColor=colorMapping[e.key.toUpperCase()];
        console.log(selectedColor)
    }
    if(e.key.toUpperCase()=="X"){
        selectedColor=8
        console.log("asuthiserou" ,selectedColor)
    }
    if(e.key=="Control"){
        autoColor = true;
        selectedColor = 8;
    }

    if(e.key=="ArrowRight"){
        page++
        loadPage();
    }
    if(e.key=="ArrowLeft"){
        if(page!=0){
            page++
            loadPage();
        }
    }
})








$("#copyfumen").click(function(){
    navigator.clipboard.writeText(fumen)
})