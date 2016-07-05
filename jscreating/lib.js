/**
 * Created by rentalnet on 9/25/2015.
 */
function create(element,classname){

    var elm = document.createElement(element);
    elm.className=classname;
    document.body.appendChild(elm);

}

function divsFromArray(arr){

    for(var i=0; i<arr.length; i++){
        var arrs= arr[i];
        return arrs;
    }
}
function create2(element){
    return function createClass(classname){
        var elm = document.createElement(element);
        elm.className=classname;
        document.body.appendChild(elm);

    }
}
create("div", "reddiv");
create("div", "bluediv");
create("div","greendiv");

var creatediv=create2("div");
creatediv("bluediv");
creatediv("greendiv");
creatediv("reddiv");
/*var divarray=["reddiv","bluediv","greendiv"];

create("div", divsFromArray(divarray));
divsFromArray(divarray);*/
