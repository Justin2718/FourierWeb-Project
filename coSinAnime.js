function circleForumla(rad,theta){
    /*  (x,y) = (r cos(0), r sin(0)) */
    theta *= 3.14159/180;

    var x =0;
    var y =0;

    x = rad*Math.cos(theta)
    y = rad*Math.sin(theta)

    return [x,y];
   
}
const canvas = document.getElementById("coSin")
const ctx = canvas.getContext("2d");

const r = 100;
const xStart = 150;
const yStart = canvas.height / 2;
var xPos = 0;
var yPos = 0;

  //var id = setInterval(frame, 10);
ctx.strokeStyle = "white";

for (let i = 0; i < 360; i += 1.5){
    xPos = 0;
    yPos = 0;

    ctx.beginPath();
    ctx.moveTo(xStart, yStart);

    [xPos, yPos] = circleForumla(r,i);
    xPos += xStart;
    yPos += yStart;
    ctx.lineTo(xPos, yPos);
    ctx.stroke();
}
//clearInterval(id);

