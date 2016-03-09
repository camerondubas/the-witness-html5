'use strict';

export default class Game {
  constructor() {
    this.canvas = document.querySelector('#canvas');
    this.context = this.canvas.getContext("2d");

    this.init();
  }

  init() {
    // Canvas
    this.canvas.width = 500;
    this.canvas.height = 500;

    // Frame Rate
    this.config = {};
    this.config.fps = 60;
    this.config.refreshInterval = 1000 / this.config.fps;
  };

  drawPanel() {
    this.context.beginPath();
    this.context.fillStyle = '#F4AE00';
    this.context.closePath();
    this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
  };

  drawPuzzle() {
    let lineWidth = 50;
    let startPoint = {
      x: 250,
      y: 250,
    };

    // new Puzzle
    // new GridPuzzle, extends puzzle, sets color, style etc.

    this.context.beginPath();
    this.context.fillStyle = '#744F00';
    this.context.arc(startPoint.x, startPoint.y, lineWidth, -Math.PI/3, Math.PI + (Math.PI/3));
    this.context.fill();
    this.context.closePath();

    this.context.fillRect(startPoint.x - (lineWidth/2) , startPoint.y - 200,lineWidth,200);
  }
};
