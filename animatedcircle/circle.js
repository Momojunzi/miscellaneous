/**
 * Created by rentalnet on 9/15/2015.
 */
function move(element){
    var left = 0;

    function frame(){
        left++;

        elem.style.left = left + "px";

        if( left===200){
            clearInterval(id);
        }

        id = setInterval(frame, 10);
    }
}