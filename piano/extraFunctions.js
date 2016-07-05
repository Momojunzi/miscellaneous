/**
 * Created by rentalnet on 10/15/2015.
 */
function createchild(parentid,element,classname,id) {
    var pnt = document.getElementById(parentid)
    var elm = document.createElement(element);
    elm.className = classname;
    elm.id = id;
    pnt.appendChild(elm);

}

function mousePianoKeyboard(keyValue,element_id, wave, freq){
    var oscillator = context.createOscillator();
    var gain = context.createGain();
    oscillator.connect(gain);
    gain.connect(context.destination);
    gain.gain.value=0;
    oscillator.start();
    document.addEventListener("keypress", function(){
        var x = event.which;
        if(x===keyValue) {
            oscillator.type = wave;
            oscillator.frequency.value = freq;
            gain.gain.value = 1;
        }
    });
    document.addEventListener("keyup", function(){
        gain.gain.value=0;
    });
}
/*createchild("piano", "div", "keyDiv", "keyDiv");
 createchild("keyDiv", "div", "whiteKey", "A");
 createchild("keyDiv", "div", "whiteKey", "A");
 createchild("keyDiv", "div", "whiteKey", "A");
 createchild("keyDiv", "div", "whiteKey", "A");
 createchild("keyDiv", "div", "whiteKey", "A");
 createchild("keyDiv", "div", "whiteKey", "A");
 createchild("keyDiv", "div", "whiteKey", "A");
 createchild("keyDiv", "div", "whiteKey", "A");
 createchild("keyDiv", "div", "whiteKey", "A");
 createchild("keyDiv", "div", "whiteKey", "A");
 createchild("keyDiv", "div", "whiteKey", "A");
 createchild("keyDiv", "div", "whiteKey", "A");
 createchild("keyDiv", "div", "whiteKey", "A");
 createchild("keyDiv", "div", "whiteKey", "A");
 createchild("keyDiv", "div", "whiteKey", "A");
 createchild("keyDiv", "div", "whiteKey", "A");*/

/*var creatKeyBox= create2("piano","div");
 creatKeyBox("keyDiv","keyDiv");
 var createKey=create2("keyDiv","div");
 createKey("whiteKey", "A");
 /*createKey("blackKey", "Ashrp");*/