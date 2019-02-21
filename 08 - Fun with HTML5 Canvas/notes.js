// *******************NOTES ONLY*******************

//set size of canvas equal to size of browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// drawing.fillRect(x, y, width, height);
draw.fillStyle = 'blue';    //insert color before shape
draw.fillRect(100, 100, 150, 150);

draw.fillStyle = 'green';
draw.fillRect(300, 100, 150, 150);

//line
draw.beginPath();
// draw.moveTo(x, y);
draw.moveTo(300, 300);
draw.lineTo(600, 100);
draw.lineTo(700, 300);
draw.strokeStyle = 'red';   //to color lines 
draw.stroke();

//arc / circle
for (let i = 0; i < 100; i++) {
    const letters = '0123456789ABCDEF';
    let color = '';
    for (let j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
      }


    draw.beginPath();
    /* draw.arc(x: Int, y: Int, radius: Int, startAngle: Float (gradient measurement), endAngle: Float, 
    drawCounterClockwise: Bool (false)); */
    draw.arc(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 30, 0, Math.PI * 2, false);
    draw.strokeStyle = `#${color}`;
    draw.stroke();
}