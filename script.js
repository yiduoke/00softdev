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
}

var clean = function(e){
    ctx.clearRect(0, 0, 500, 500);
}

var draw = function(click){
    var x = click.clientX;
    var y = click.clientY;

    if (shape == 0){
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }
    else{
        ctx.fillRect(x, y, 20, 20);
    }
}

toggle.addEventListener("click", otherShape);
clear.addEventListener("click", clean);
c.addEventListener("click", draw);