/*Under MIT license by the coding can be easy foundation*/
//just doing some stuff with canvas
var c = document.getElementById('canvas')
var ctx = c.getContext('2d')
function rect(x, y, w, h){
ctx.fillRect(x, y, w, h)

}
//this is to create a pop up message
function pop_up_message(message) {
alert(message)
}
/*just teaching people how to make if statments
 if (true) {
console.log(true)
}*/
//to print a message to the console
function print(message) {
console.log(message)
}
function ellipse(x, y, w, h) {
    ctx.beginPath();
    ctx.arc(x, y, w, h,0, true);
    ctx.stroke();
}
