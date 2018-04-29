'use strict';

// Creating the Tic Tac Toe board object.
class Board {
  constructor() {
    this.cases = [["", "", ""], ["", "", ""], ["", "", ""]] ;
    
  }
  getBoard(){
    return this.cases;
  }
  markCase(x,y,mark){
    this.cases[x][y]= mark;
  }

}

export default Board;