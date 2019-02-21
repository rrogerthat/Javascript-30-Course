const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';    //color
ctx.lineJoin = 'round'; //shape at end of line
ctx.lineCap = 'round';
ctx.lineWidth = 0;

let isDrawing = false;  //false when mouse button not pressed down so as to not draw
let lastX = 0;  //x coordinate position on page
let lastY = 0;  //y coordinate position on page
let hue = 0;
let direction = true;

function draw(e) {
    if(!isDrawing) return;  //stop function from running when not moused down
    
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();    //initialize
    ctx.moveTo(lastX, lastY);   //where line drawn starts
    ctx.lineTo(e.offsetX, e.offsetY); //where line ends
    ctx.stroke(); //end

    [lastX, lastY] = [e.offsetX, e.offsetY]; //update loc using ES6 destructuring (var assign)- reduced to one line instead of 2
    
    hue++; //change stroke color
    if (hue > 360) hue = 0; //reset hue colors but still works w/o it

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
    if (direction) {
        ctx.lineWidth++; 
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;   //test if true of false, then do something. Called a 'flag' in JS.
    [lastX, lastY] = [e.offsetX, e.offsetY];    //update variables. Start drawing here.
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
