const data = {
    "TIJL":{
        category:1,
        main_setup:"v115@Rhg0Hegli0zhilJeAgH",
    },
    "TIJO":{
        category:1,
        main_setup:"v115@Ghwhh0Fewwwhg0RpDexwwhg0RpEewwwhJeAgH",
    },
    "TIJS":{
        category:1,
        main_setup:"v115@Lhg0GeR4g0FeR4h0AezhJeAgH",
    },
    "TIJZ":{
        category:1,
        main_setup:"v115@GhwhBtFewwwhg0BtDexwwhi0EewwwhJeAgH",
    },
    "TILO":{
        category:1,
        main_setup:"v115@9gwhIewhwwFehlwhxwDeRpglwhwwEeRpglJeAgH",
    },
    "TILS":{
        category:1,
        main_setup:"v115@9gwhIewhwwFeR4whxwDeR4glwhwwEeilJeAgH",
    },
    "TILZ":{
        category:1,
        main_setup:"v115@MhglIeglBtBezhAehlBtKeAgH",
    },
    "TIOS":{
        category:1,
        main_setup:"v115@GhwhIewhCeR4wwCewhBeR4ywBewhJeAgH",
    },
    "TIOZ":{
        category:1,
        main_setup:"v115@9gwhIewhIewhCewwBtCewhBeywBtLeAgH",
    },
    "TISZ":{
        category:1,
        main_setup:"v115@JhBtHewwBtR4DeywR4zhJeAgH",
    },
    "IJLO":{
        category:2,
        main_setup:"v115@Rhg0DeglBeRpi0ilBeRpJeAgH",
    },
    "IJLS":{
        category:2,
        main_setup:"v115@GhwhIewhg0Geglwhi0CeilwhJeAgH",
    },
    "IJLZ":{
        category:2,
        main_setup:"v115@9gwhIewhIewhg0Geglwhi0CeilJeAgH",
    },
    "IOSZ":{
        category:2,
        main_setup:"v115@KhAtFeRpBtR4DeRpAtR4OeAgH",
    },
    "JLOS":{
        category:2,
        main_setup:"v115@9gQ4IeR4Heg0Q4CeRpBegli0BeRpilJeAgH",
    },
    "JLOZ":{
        category:2,
        main_setup:"v115@GhAtHeBtg0BeRpCeAtgli0RpBeilJeAgH",
    },
    "JLSZ":{
        category:2,
        main_setup:"v115@9gQ4IeR4Heg0Q4BtEegli0BtBeilJeAgH",
    },
    "IJOS":{
        category:3,
        main_setup:"v115@OhR4GeR4RpDezhRpJeAgH",
    },
    "IJOZ":{
        category:3,
        main_setup:"v115@GhwhIewhRpFeglwhRpDeilwhJeAgH",
    },
    "IJSZ":{
        category:3,
        main_setup:"v115@9gQ4HewhR4Gewhg0Q4BtEewhi0BtDewhJeAgH",
    },
    "ILOS":{
        category:3,
        main_setup:"v115@9gwhIewhIewhg0FeRpwhi0DeRpJeAgH",
    },
    "ILOZ":{
        category:3,
        main_setup:"v115@IhBtGeRpBtFeRpzhNeAgH",
    },
    "ILSZ":{
        category:3,
        main_setup:"v115@9gwhHeAtwhGeBtwhEeR4AtglwhDeR4ilJeAgH",
    },
    "JOSZ":{
        category:3,
        main_setup:"v115@9gQ4IeR4Heg0Q4BtDeRpi0BtCeRpJeAgH",
    },
    "LOSZ":{
        category:3,
        main_setup:"v115@GhAtHeBtRpDeR4AtglRpCeR4ilJeAgH",
    },
}




keyMap = {}










const qbsearch = $("#qbsearch > input")




qbsearch.on("keydown",function(e){
    const key = e.key;
    const control = e.ctrlKey;
    if (control || e.key.length > 1) {
        return;
    }
    else if (!(/[TIJLOSZ]/gi.test(key))) {
        e.preventDefault();
    }

    newWord = (qbsearch.val() + e.key).toUpperCase()
    if(newWord.length==5){
        return
    }

    //prevent 3 piece duplicates
    for(letter of newWord){
        if(newWord.match(new RegExp(letter,"g")).length>=2){
            e.preventDefault()
        }
    }
})


qbsearch.on('input',selection_screen)

$(".setupgrid").on("wheel", function (evt){
    children_width = document.querySelector("#group2 > div.setupgrid > div:nth-child(1)").offsetWidth
    
    if(evt.originalEvent.deltaY>0){
        new_scroll = this.scrollLeft + children_width + 0.03 * document.body.offsetWidth
    }else{
        new_scroll = this.scrollLeft - children_width - 0.03 * document.body.offsetWidth
    }
    new_scroll = Math.max(0,new_scroll)
    new_scroll = Math.min(this.scrollWidth - this.offsetWidth, new_scroll)
    this.scrollLeft = new_scroll
    scroll_percent = new_scroll / (this.scrollWidth - this.offsetWidth)
    $(this.previousElementSibling).children()[0].style.width = `${scroll_percent * 100}%`
    
});





function selection_screen(){
    queue = qbsearch.val().toUpperCase()
    
    $("#search").removeClass("hidden")
    $("#setupfocus").addClass("hidden")
    $(`.setupgrid`).empty()


    loop1: for(second in data){
        for(letter of queue){
            if(!second.includes(letter)){
                if(second == "IJLS")console.log(second,letter);
                continue loop1;
            }
        }


        div = $(document.createElement('div'))

        name_tag = $(document.createElement('span'))

        name_tag.html(second)

        img = document.createElement("img")
        img.src = getDataURL(data[second].main_setup)


        $(`#group${data[second].category}>.setupgrid`).append(div)
        div.append(name_tag)
        div.append(img)
    }
    for(element of document.querySelectorAll(".setupgrid > div")){
        element.addEventListener("click",function(e){
            focus($($(this).children()[0]).html())
            console.log("hi");
        },{passive:true})
    }
    $(".setupgrid").each(function(){
        scroll_percent = this.scrollLeft / (this.scrollWidth - this.offsetWidth)
        if(this.scrollWidth == this.offsetWidth){
            scroll_percent = 1
            console.log(scroll_percent);
        }
        console.log(scroll_percent);
        $(this.previousElementSibling).children()[0].style.width = `${scroll_percent * 100}%`
    })
}




function focus(second){
    $("#search").addClass("hidden")
    $("#setupfocus").removeClass("hidden")
    $("#title").html("")

    for(letter of second){
        $("#title").html($("#title").html()+`<span class = ${letter}>${letter}</span>`)
    }

    $("#setupfocus > img").attr("src",getDataURL(data[second].main_setup))
    console.log(second);
}


selection_screen()



document.addEventListener("keyup",function(e){
    if(e.key=="Escape"){
        if($("#search").hasClass("hidden")){
            selection_screen()
        }
    }
    
});




document.onkeydown = document.onkeyup = function(e){
    if(e.repeat)return;
    keyMap[e.key]=e.type=='keyup'
}


//focus("JLOZ")
