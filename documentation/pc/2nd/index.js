const qbsearch = $("#qbsearch > input");

$("#qb").hide();
$("#oqb").hide();
$("#general").hide();

qbsearch.on('keydown', function (e) {
    const key = e.key;
    const control = e.ctrlKey;
    if (control || e.key.length > 1) {

    }
    else if (!(/[TIJLOSZ]/gi.test(key))) {
        e.preventDefault();
    }
})
qbsearch.on('input', function (e) {
    var queue = qbsearch.val();
    qbsearch.val(queue.toUpperCase());
    queue = qbsearch.val();
    if (queue.length < 4) {
        $("#qb").hide();
        $("#oqb").hide();
        $("#general").hide();
    }
    else if (queue.length == 4) {
        loop1: for (const [fourpiece, value] of Object.entries(qb)) {
            for (const i of fourpiece) {
                if (!(queue.includes(i))) {
                    continue loop1;
                }
            }
            LoadGeneralSetups(value);
            LoadQueueBasedSetups(queue, value);
        }
    } else if (queue.length == 7) {
        for (const [fourpiece, value] of Object.entries(qb)) {
            if (fourpiece.split('').some(i => !queue.split('').splice(0, 4).join('').includes(i))) continue;
            for (const char of queue.split('').splice(4).join('')) {
                if (queue.split('').splice(4).join('').indexOf(char) != queue.split('').splice(4).join('').lastIndexOf(char)) {
                    $("#qb").hide();
                    $("#oqb").hide();
                    $("#general").hide();
                    return;
                }
            }
            LoadGeneralSetups(value);


            //check for dupes


            LoadQueueBasedSetups(queue, value);
        }

    } else {
        return;
    }
})



//queue from url

//mkjlong.github.io/

const url = window.location.search;

const urlParams = new URLSearchParams(url);

if(urlParams.has("queue")){
    queue = urlParams.get("queue");
    queue = queue.toUpperCase();
    if(queue.length==4||queue.length==7){
        if(/^[TIJLOSZ]+$/.test(queue)){
            console.log(queue)
            qbsearch.val(queue)
            queue = qbsearch.val();
            (function(){
                if (queue.length < 4) {
                    $("#qb").hide();
                    $("#oqb").hide();
                    $("#general").hide();
                }
                else if (queue.length == 4) {
                    loop1: for (const [fourpiece, value] of Object.entries(qb)) {
                        for (const i of fourpiece) {
                            if (!(queue.includes(i))) {
                                continue loop1;
                            }
                        }
                        LoadGeneralSetups(value);
                        LoadQueueBasedSetups(queue, value);
                    }
                } else if (queue.length == 7) {
                    for (const [fourpiece, value] of Object.entries(qb)) {
                        if (fourpiece.split('').some(i => !queue.split('').splice(0, 4).join('').includes(i))) continue;
                        for (const char of queue.split('').splice(4).join('')) {
                            if (queue.split('').splice(4).join('').indexOf(char) != queue.split('').splice(4).join('').lastIndexOf(char)) {
                                $("#qb").hide();
                                $("#oqb").hide();
                                $("#general").hide();
                                return;
                            }
                        }
                        LoadGeneralSetups(value);
            
            
                        //check for dupes
            
            
                        LoadQueueBasedSetups(queue, value);
                    }
                }
            })();
            
        }
    };

}





//loading fumens



for (const element of document.getElementsByTagName("fumen")) {
    const fumen = new Fumen(element)
}
//fumencanvas("v115@Hhglg0Hegli0FehlReAgHHhAtIeAtCPFeAtSeAgH");

//$("#fumeninfo").hide();
$(document).on("keydown", async function (e) {
    if (e.key.toLowerCase() == "m") {
        for (const fumen of fumens) {
            fumen.mirror();
        }
    }
})






const see = (queue, pieces) => {
    for (const piece of pieces) {
        if (!queue.includes(piece)) {
            return false;
        }
    }
    return true;
}


async function LoadQueueBasedSetups(queue, value) {

    $("#qb").empty()
    $("#qb").show();
    const queueBasedTitle = document.createElement('h2');

    $(queueBasedTitle).text("Queue based setups")

    $("#qb").append(queueBasedTitle)

    //check if qb exists
    if (queue.length == 7) {
        var hasQb = false;
        for (const [name, setup] of Object.entries(value)) {
            if (setup.type != 'qb') continue;
            if (queue.length == 7) {
                if (setup.queues(queue.split('').splice(4).join(''))) hasQb = true;
            }

            if (setup.queues4p) {
                if (queue.length == 4) {
                    if (setup.queues4p(queue)) hasQb = true;


                } else if (queue.length == 7) {
                    if (setup.queues4p(queue.split('').splice(0, 4).join(''))) hasQb = true;
                }
            }

        }

        if (!hasQb) {
            $("#qb").hide();
        }

    }

    for (const [name, setup] of Object.entries(value)) {
        if (setup.type != 'qb') continue;
        if (queue.length == 7) {
            if (!setup.queues(queue.split('').splice(4).join(''))) continue;
        }

        if (setup.queues4p) {
            if (queue.length == 4) {
                if (!setup.queues4p(queue)) continue;


            } else if (queue.length == 7) {
                if (!setup.queues4p(queue.split('').splice(0, 4).join(''))) continue;
            }
        }

        const setupDiv = document.createElement('div')

        $(setupDiv).addClass("setup")
        const fumenDiv = document.createElement('div')
        $(fumenDiv).html(processText(name))
        const fumen = new Fumen(document.createElement('fumen'))
        fumen.setFumen(setup.fumen);
        $(fumenDiv).append(fumen.element);


        const savesDiv = document.createElement('div');

        $(savesDiv).html(processText(`Save${Object.keys(setup.saves).length == 1 ? `: {${Object.keys(setup.saves)[0]}}` : 's:'}`))

        if (Object.keys(setup.saves).length > 1) {
            for (const [save, percent] of Object.entries(setup.saves)) {
                $(savesDiv).html(processText(`${$(savesDiv).html()}\n{${save}}:${percent}`))
            }

        }

        const minimalDiv = document.createElement('div')
        $(minimalDiv).html(decoder.decode(setup.minimals).length == 1 ? 'Solve' : `Minimals (${decoder.decode(setup.minimals).length})`)

        const minimalsfumen = new Fumen(document.createElement('fumen'))
        minimalsfumen.setFumen(setup.minimals);
        if (queue.length == 7) minimalsfumen.load();
        $(minimalDiv).append(minimalsfumen.element);

        setupDiv.append(fumenDiv, savesDiv, minimalDiv)

        if (setup.notes) {
            const notesDiv = document.createElement('div')
            $(notesDiv).html(processText(`Notes:<br><br>${setup.notes}`))
            $(setupDiv).append(notesDiv);

        }
        $("#qb").append(setupDiv);
    }
}

async function LoadGeneralSetups(value) {

    $("#general").empty()
    $("#general").show();
    const generalTitle = document.createElement('h2');

    $(generalTitle).text("General setups")
    $("#general").append(generalTitle)
    for (const [name, setup] of Object.entries(value)) {
        if (setup.type != 'general') continue;
        const setupDiv = document.createElement('div')
        setupDiv.classList.add("setup")
        $(setupDiv).addClass("setup")
        const fumenDiv = document.createElement('div');
        $(fumenDiv).addClass("fumen")
        $(fumenDiv).html(processText(name))
        const fumen = new Fumen(document.createElement('fumen'))
        fumen.setFumen(setup.fumen);
        $(fumenDiv).append(fumen.element);




        const savesDiv = document.createElement('div');
        $(savesDiv).addClass("saves")

        $(savesDiv).html(`Saves:`)

        for (const [save, percent] of Object.entries(setup.saves)) {
            $(savesDiv).html(processText(`${$(savesDiv).html()}\n{${save}}:${percent}`))
        }

        const minimalDiv = document.createElement('div')
        $(minimalDiv).addClass("minimals")

        $(minimalDiv).html(processText(`Minimals (${decoder.decode(setup.minimals).length})`))
        const minimalsfumen = new Fumen(document.createElement('fumen'))
        minimalsfumen.setFumen(setup.minimals);
        $(minimalDiv).append(minimalsfumen.element);


        setupDiv.append(fumenDiv, savesDiv, minimalDiv);

        if (setup.notes) {
            const notesDiv = document.createElement('div')

            $(notesDiv).html(processText(`Notes:<br><br>${setup.notes}`))
            $(setupDiv).append(notesDiv);

        }


        $("#general").append(setupDiv);
    }
}






function processText(str) {
    str = str.replaceAll("{T}", "<piece class='t'>T</piece>")
    str = str.replaceAll("{I}", "<piece class='i'>I</piece>")
    str = str.replaceAll("{J}", "<piece class='j'>J</piece>")
    str = str.replaceAll("{L}", "<piece class='l'>L</piece>")
    str = str.replaceAll("{O}", "<piece class='o'>O</piece>")
    str = str.replaceAll("{S}", "<piece class='s'>S</piece>")
    str = str.replaceAll("{Z}", "<piece class='z'>Z</piece>")
    str = str.replaceAll("\n", "<br>")
    return str;
}