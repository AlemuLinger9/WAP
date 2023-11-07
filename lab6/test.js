function a(){
    console.log("Inner: ",x);
    var y = 20;
}
a();
var x = 10;
//console.log("outer:", x);
console.log("outer:", y);
var y = 40;
console.log("outer:", y);