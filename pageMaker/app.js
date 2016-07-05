function createPage(){
    var idArray = ["header", "news1", "adds1", "news2","adds2", "footer"];
    var classArray = ["headerBar", "articleDiv", "addDiv", "articleDiv", "addDiv","footer"];

    (function elementCreator(){
        var counter = 0;
        idArray.forEach(function(elmid){
            var element = document.createElement("div");
            element.id = elmid;
            element.className = classArray[counter];
            document.body.appendChild(element);
            counter += 1;
        }, idArray);
    })();
    function innerElementCreator(parentId, innerIdArray,innerClassArray, elementTypeArray){
        var counter2 = 0;
        var parent = document.getElementById(parentId);
        elementTypeArray.forEach(function(elmType) {
            var element = document.createElement(elmType);
            element.id = innerIdArray[counter2];
            element.className = innerClassArray[counter2];
            parent.appendChild(element);
            counter2 += 1;
        });
    }
    innerElementCreator("header", ["logo", "nav1", "nav2", "nav3", "nav4"],["logo", "nav","nav","nav","nav"],["h1","div","div","div","div"]);
    innerElementCreator("news1",["newsImage1","headline1","article1"],["articleImage","headline", "article"],["img",,"h2","p"]);
}
createPage();
