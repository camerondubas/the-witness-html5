 'use strict';

export default class Game {
  constructor(puzzleTypes) {
    this.canvas = document.querySelector('#canvas');
    this.context = this.canvas.getContext("2d");

    this.init();
    this.puzzleTypes = puzzleTypes;


    this.loadLevel();
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

  loadLevel() {
    this.level = new this.puzzleTypes.GridPuzzle(this.canvas);
  }

  draw() {

  }

  drawPanel() {
    this.context.beginPath();
    this.context.fillStyle = this.level.config.panelColor;
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
    this.context.fillStyle = this.level.config.puzzleColor;
    this.context.arc(startPoint.x, startPoint.y, lineWidth, -Math.PI/3, Math.PI + (Math.PI/3));
    this.context.fill();
    this.context.closePath();

    this.context.fillRect(startPoint.x - (lineWidth/2) , startPoint.y - 200,lineWidth,200);
  }

  drawGrid() {
    for (var index = 0; index < this.level.config.layoutX; index++) {
      this.context.beginPath();
      this.context.strokeStyle = '#000';
      this.context.lineTo((this.canvas.width/this.level.config.layoutX) * (index + 1),0);
      this.context.lineTo((this.canvas.width/this.level.config.layoutX) * (index + 1),this.canvas.height);
      this.context.stroke();
      this.context.closePath();
    }

    for (var index = 0; index < this.level.config.layoutY; index++) {
      this.context.beginPath();
      this.context.strokeStyle = '#000';
      this.context.lineTo(0, (this.canvas.width/this.level.config.layoutY) * (index + 1));
      this.context.lineTo(this.canvas.width, (this.canvas.width/this.level.config.layoutY) * (index + 1));
      this.context.stroke();
      this.context.closePath();
    }
  }

  drawPuzzleBoundingBox() {
    this.context.beginPath();
    this.context.lineTo(this.level.boundingBox[0][0], this.level.boundingBox[0][1]);
    this.context.lineTo(this.level.boundingBox[1][0], this.level.boundingBox[1][1]);
    this.context.lineTo(this.level.boundingBox[2][0], this.level.boundingBox[2][1]);
    this.context.lineTo(this.level.boundingBox[3][0], this.level.boundingBox[3][1]);
    this.context.strokeStyle = '#F00';
    this.context.stroke();
    this.context.closePath();
  }
};
