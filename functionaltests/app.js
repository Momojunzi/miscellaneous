/*function colorDiv(div_id, color){
    document.getElementById(div_id).style.backgroundColor = color;
}*/

/*function colorDiv(element_id,event,div_id,color){
    document.getElementById(element_id).addEventListener(event, function() {
        document.getElementById(div_id).style.backgroundColor = color;
    });
}
colorDiv("div1", "click", "div1","red");

colorDiv("div2", "click", "div2","blue");*/




    /*function newNoise(wave, freq,startTime) {
        var oscillator = context.createOscillator();
        oscillator.connect(context.destination);
        oscillator.type = wave;
        oscillator.frequency.value = freq;
        oscillator.start(startTime);
    }*/



/*newNoise("sine",440,0);
newNoise("square",330,4);
newNoise("sine",294,4);*/
var context=new AudioContext();
function pianoKey(element_id, event1,event2, wave, freq){
    var oscillator = context.createOscillator();
    var gain = context.createGain();
    oscillator.connect(gain);
    gain.connect(context.destination);
    gain.gain.value=0;
    oscillator.start();
    document.getElementById(element_id).addEventListener(event1, function(){
        oscillator.type = wave;
        oscillator.frequency.value = freq;
        gain.gain.value=1;
    });
    document.getElementById(element_id).addEventListener(event2, function(){
        gain.gain.value=0;
    });
}

function create(element,classname,id){

    var elm = document.createElement(element);
    elm.className=classname;
    elm.id=id;
    document.body.appendChild(elm);

}
function a(var1){
    alert("Hello " + var1);
}
function hello(name, callback){
    callback(name);
}
function mySandwich(param1, param2, callback) {
    alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
    callback();
}

mySandwich('ham', 'cheese', function() {
    alert('Finished eating my sandwich.');
});
hello("mark",a);

create("div","piano","piano");

pianoKey("div1","mouseover","mouseout","sine",441);
pianoKey("div2","mouseover","mouseout","sine",440);
pianoKey("div3","mouseover","mouseout","sine",880);


