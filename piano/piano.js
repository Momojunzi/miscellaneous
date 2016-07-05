


var context=new AudioContext();

function keydiv(Class, Id){
    var v = create2("piano", "div");
    return v(Class,Id);
}

function keycreator(Class, Id){
    var v = create2("keyDiv1", "div");
    return v(Class,Id);
}
function keycreatorBass(Class, Id){
    var v = create2("keyDiv2", "div");
    return v(Class,Id);
}

function create2(parentid, element){
    var pnt = document.getElementById(parentid);
    var elm = document.createElement(element);
    pnt.appendChild(elm);
    return function assignClass(Class, Id) {
        elm.className = Class;
        elm.id = Id;
    }
}

function createPiano(element,classname,id) {
    var elm = document.createElement(element);
    elm.className = classname;
    elm.id = id;
    document.body.appendChild(elm);
}


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
function mousePiano(element_id, wave, freq,keyValue){
    var oscillator = context.createOscillator();
    var gain = context.createGain();
    oscillator.connect(gain);
    gain.connect(context.destination);
    gain.gain.value=0;
    oscillator.start();
    document.getElementById(element_id).addEventListener("mouseover", function(){
        oscillator.type = wave;
        oscillator.frequency.value = freq;
        gain.gain.value=1;
    });
    document.addEventListener("keypress", function(){
        var x = event.which;
        if(x===keyValue) {
            oscillator.type = wave;
            oscillator.frequency.value = freq;
            gain.gain.value = 1;
        }
    });
    document.addEventListener("keyup", function(){
        gain.gain.value = 0;

    });
    document.getElementById(element_id).addEventListener("mouseout", function(){
        gain.gain.value=0;
    });
}


function keycreator2(Class, Id, wave, freq){
    var v = create2("keyDiv", "div");
    mousePiano(Id,wave,freq);
    return v(Class,Id);
}

function bassKeys(){
    keydiv("keyDiv", "keyDiv2");
    keycreatorBass("whiteKey", "Ab");
    keycreatorBass("blackKey", "Ashrpb");
    keycreatorBass("whitekey","Bb");
    keycreatorBass("whitekey","Cb");
    keycreatorBass("blackKey", "Cshrpb");
    keycreatorBass("whitekey","Db");
    keycreatorBass("blackKey", "Dshrpb");
    keycreatorBass("whitekey","Eb");
    keycreatorBass("whitekey","Fb");
    keycreatorBass("blackKey", "Fshrpb");
    keycreatorBass("whitekey","Gb");
    keycreatorBass("blackKey", "Gshrpb");

}
function createBass(){
    var bass=document.getElementById("bassButton");
    bass.addEventListener("click", bassKeys);
}
createPiano("div","piano", "piano");
keydiv("button", "bassButton");
keydiv("keyDiv","keyDiv1");
keycreator("whiteKey","A");
keycreator("blackKey", "Ashrp");
keycreator("whitekey","B");
keycreator("whitekey","C");
keycreator("blackKey", "Cshrp");
keycreator("whitekey","D");
keycreator("blackKey", "Dshrp");
keycreator("whitekey","E");
keycreator("whitekey","F");
keycreator("blackKey", "Fshrp");
keycreator("whitekey","G");
keycreator("blackKey", "Gshrp");


mousePiano("A", "sine", 220,103);
mousePiano("Ashrp", "sine", 233,121);
mousePiano("B", "sine", 247,104);
mousePiano("C", "sine", 262,106);
mousePiano("Cshrp", "sine", 277,105);
mousePiano("D", "sine", 294,107);
mousePiano("Dshrp", "sine", 311,111);
mousePiano("E", "sine", 330,108);
mousePiano("F", "sine", 350,59);
mousePiano("Fshrp", "sine", 370,91);
mousePiano("G", "sine", 392,39);
mousePiano("Gshrp", "sine", 415,93);



createBass();