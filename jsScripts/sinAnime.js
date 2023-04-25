
const sinCanvas = document.getElementById("sin")
sinCanvas.width = window.innerWidth-25;

const sinBrush = sinCanvas.getContext("2d");

var sinwaveList = [];

const sinR = 100;
const sinXStart = 150;
const sinYStart = sinCanvas.height / 2;
const sinDAway = 110
var sinXPos = 0;
var sinYPos = 0;



function sinCircleForumla(rad,theta)
{
    theta *= 3.14159/180;

    var x =0;
    var y =0;

    x = rad*Math.cos(theta)
    y = rad*Math.sin(theta)

    return [x,y];
   
}
function sinAnimateCircle()
{
    sinAngle+= 1;

  sinBrush.strokeStyle = "White";

    sinXPos = 0;
    sinYPos = 0;

    [sinXPos, sinYPos] = sinCircleForumla(sinR,sinAngle);

    sinXPos += sinXStart;
    sinYPos += sinYStart;

    sinBrush.clearRect(sinXStart-100,sinYStart-100,sinXStart+100,sinYStart+100);
    sinBrush.beginPath();
    sinBrush.moveTo(sinXStart, sinYStart);
    sinBrush.lineTo(sinXPos, sinYPos);
    sinBrush.stroke();
    sinAnimateWave();
}
function sinAnimateWave()
{
    
    
    sinwaveList.unshift(Math.floor(sinYPos));
    sinwaveList.pop();

    sinBrush.clearRect(sinXStart+sinDAway-1,0,sinCanvas.width,sinCanvas.height);
    for (i =0; i < sinCanvas.width-sinDAway-sinXStart; i++)
    {
        sinBrush.strokeStyle = "White";
        sinBrush.strokeRect(i+sinXStart+sinDAway,sinwaveList[i],1,1);
    }
    
}
sinAngle = 0;
for (i =0; i < sinCanvas.width-sinDAway-sinXStart; i++)
{
    sinwaveList.unshift(sinCanvas.height/2);
}
setInterval(sinAnimateCircle,1);
