var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var shape = 0; // 0 is circle, 1 is square

var toggle = document.getElementById('toggle');
var clear = document.getElementById('clear');

var otherShape = function(e){
    if (shape == 0){
        shape = 1;
    }
    else{
        shape = 0;
    }
};

var clean = function(e){
    ctx.clearRect(0, 0, 500, 500);
}

toggle.addEventListener("click", otherShape);
clear.addEventListener("click", clean);