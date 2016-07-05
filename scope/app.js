function makeElementLayer(parentId, typeArray, classArray, idArray){
    var counter = 0;
    if(parentId === "body"){
        typeArray.forEach(function(elem){

            var newElem = document.createElement(elem);
            newElem.className = classArray[counter];
            newElem.id=idArray[counter];
            document.body.appendChild(newElem);
            counter += 1;
        });
    }
    else{
        typeArray.forEach(function(elem){

            var parent = document.getElementById(parentId);
            var newElem = document.createElement(elem);
            newElem.className = classArray[counter];
            newElem.id=idArray[counter];
            parent.appendChild(newElem);
            counter += 1;
        });
    }
}

function addText(parentId, textId, text){
    var newP = document.createElement("p");
    var newText = document.createTextNode(text);
    var parent = document.getElementById(parentId);
    newP.id = textId;
    parent.appendChild(newP);
    newP.appendChild(newText);
}

makeElementLayer("body",["div"],["main-div"],["main-div"]);
makeElementLayer("main-div",["div","div","div","div"],["adiv","adiv","adiv","adiv"],["div1","div2","div3","div4"]);
makeElementLayer("div1",["div","div","div","div"],["adiv","adiv","adiv","adiv"],["div1-1","div1-2","div1-3","div1-4"]);
makeElementLayer("div2",["div","div","div","div"],["adiv","adiv","adiv","adiv"],["div2-1","div2-2","div2-3","div2-4"]);
makeElementLayer("div3",["div","div","div","div"],["adiv","adiv","adiv","adiv"],["div3-1","div3-2","div3-3","div3-4"]);
makeElementLayer("div4",["div","div","div","div"],["adiv","adiv","adiv","adiv"],["div4-1","div4-2","div4-3","div4-4"]);
makeElementLayer("div1-1",["div"],["bdiv"],["bdiv-1"]);
makeElementLayer("bdiv-1",["div","div","div","div"],["bdiv1","bdiv1","bdiv1","bdiv1"],["bdiv1-1","bdiv1-2","bdiv1-3","bdiv1-4"]);
makeElementLayer("div1-1",["div"],["bdiv"],["bdiv-2"]);
makeElementLayer("bdiv-2",["div","div","div","div"],["bdiv1","bdiv1","bdiv1","bdiv1"],["bdiv2-1","bdiv2-2","bdiv2-3","bdiv2-4"]);
addText("bdiv1-1","button1","round button");

