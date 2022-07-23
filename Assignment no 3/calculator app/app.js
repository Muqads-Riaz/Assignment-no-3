var screen = document.getElementById('screen');
var isCalculated;
function clearAll(){
    screen.value = "";
}
function getbtnvalue(val){
    if(isCalculated &&  typeof val==Number){
        clearAll();
    }
 screen.value += val
 isCalculated = false;
}
function calculate(){
isCalculated = true;
var val = screen.value;
var finalVal = eval(val);
screen.value = finalVal;
}
