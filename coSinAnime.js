const canvas = document.getElementById("coSin")
canvas.width = window.innerWidth-25;

const brush = canvas.getContext("2d");

var waveList = [];
const r = 100;
const xStart = 150;
const yStart = canvas.height / 2;
const dAway = 110
var xPos = 0;
var yPos = 0;

    function circleForumla(rad,theta)
    {
        theta *= 3.14159/180;

        var x =0;
        var y =0;

        x = rad*Math.cos(theta)
        y = rad*Math.sin(theta)

        return [x,y];
    
    }
    function animateCircle()
    {
        angle+= 1;

    brush.strokeStyle = "White";

        xPos = 0;
        yPos = 0;

        [xPos, yPos] = circleForumla(r,angle);

        xPos += xStart;
        yPos += yStart;

        brush.clearRect(xStart-100,yStart-100,xStart+100,yStart+100);
        brush.beginPath();
        brush.moveTo(xStart, yStart);
        brush.lineTo(xPos, yPos);
        brush.stroke();
        animateWave();
    }
    function animateWave()
    {
        
        
        waveList.unshift(Math.floor(yPos));
        waveList.pop();

        brush.clearRect(xStart+dAway-1,0,canvas.width,canvas.height);
        for (i =0; i < canvas.width-dAway-xStart; i++)
        {
            brush.strokeStyle = "White";
            brush.strokeRect(i+xStart+dAway,waveList[i],1,1);
        }
        
    }
    angle = -90;
    for (i =0; i < canvas.width-dAway-xStart; i++)
    {
        waveList.unshift(canvas.height/2);
    }
    setInterval(animateCircle,1);



