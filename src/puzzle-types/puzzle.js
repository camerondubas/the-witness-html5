'use strict';

export default class Puzzle {
  constructor(canvas) {
    // this.panelBg = "#000";
    this.canvas = canvas;
    this.config = this.setup();
    this.setBoundingBox();
  }

  showGrid() {
    console.log('showing grid');
  }

  setup() {
    return {
      panelColor: '#000',
      puzzleColor: "#fff",
      puzzlePadding: 10, //PX
    };
  }

  setBoundingBox() {
    this.boundingBox = [[100,100],[200,100],[200,250],[200,100]];
  }
}
