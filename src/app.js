import './style.css';
import 'paper';

var canvas = document.querySelector('#canvas');
var context = canvas.getContext("2d");
// canvas.width = width;
// canvas.height = height;


// Base Canvas Styling
// canvas.style.backgroundColor = 'red';
canvas.width = window.innerWidth;
canvas.height = `${canvas.getBoundingClientRect().width}`;

var panelBase = new Rectangle(new Point(0,0), new Size(10,10));
panelBase.fillColor = 'blue';

context.beginPath();
context.fillStyle = '#F4AE00';
context.closePath();
context.fillRect(0,0,canvas.width,canvas.height);
