'use strict';

import Puzzle from './puzzle';

export default class GridPuzzle extends Puzzle {
  // constructor() {
  //   super();

  //   this.panelBg = '#F4AE00';
  // }

  setup() {
    return {
      panelColor: "#F4AE00",
      puzzleColor: "#744F00",
      layoutX: 4,
      layoutY: 4,
      puzzlePadding: 10
    };
  }
}
