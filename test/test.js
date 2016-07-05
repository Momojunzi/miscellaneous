/*(function init(){
    var name = "Mozilla";
    (function displayName(){
        alert(name);
    })();
})();*/
function forEach(array, action){
    for(var i= 0; i<array.length; i++)
        action(array[i]);
}

function sum(numbers){
   var total=0;
    forEach(numbers, function adder(number){
        total+=number;
    });
    alert(total);
}

/*sum([1,10,100]);*/

function negate(func){
    return function(x){
        return !func(x);
    };
}

var isNotNaN=negate(isNaN);

/*alert(isNotNaN(NaN));*/

function reduce(combine, base, array){
    forEach(array, function(element){
        base = combine(base,element);
    });
    return base;
}

function zerocount(a,b){
    return a + (b === 0 ? 1 : 0);
}

function countZeros(numbers){
    return reduce(zerocount, 0, numbers);
}

/*alert(countZeros([1,0,0,0,0,0]));*/

var divArray=["red","blue","green"];
/*function createDiv(divId){
    var newdDiv = document.createElement("div");
    newdDiv.id=(divId);
    document.body.appendChild(newdDiv);*/

divArray.forEach(function createDiv(divId){
    var newdDiv = document.createElement("div");
    newdDiv.id=(divId);
    document.body.appendChild(newdDiv);},divArray);