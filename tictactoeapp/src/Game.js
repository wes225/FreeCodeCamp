import React, { Component } from "react";
import Board from "./Board.js";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.board = new Board();
    this.state = { player: 1 };
    this.firstPlayerMarker = "X";
    this.firstPlayerTurn = false;
    this.renderBoardComponent = this.renderBoardComponent.bind(this);
    this.markCase = this.markCase.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

// Mark case with X or Y, depending on the current Player.
  markCase(x, y) {
    if (this.firstPlayerTurn) {
      this.board.markCase(x, y, this.firstPlayerMarker);
    } else {
      this.board.markCase(x, y, "O");
    }
  }
// OnClick handler for the individual button/case element.
  clickHandler(event) {
    let coord = event.target.getAttribute("coord").split(",");
    this.markCase(coord[0], coord[1]);
    console.log(this.board);
    this.setState({ player: (this.state.player = 1) ? 2 : 1 });
    this.firstPlayerTurn
      ? (this.firstPlayerTurn = false)
      : (this.firstPlayerTurn = true);
  }

  //Prepares board for rendering.
  renderBoardComponent() {
    const grid = this.board.getBoard().map((gridRow, gridRowIndex) => {
      const row = gridRow.map((element, elementIndex) => {
        return (
          <button
            className ={'case'}
            key={`${gridRowIndex},${elementIndex}`}
            value={element}
            onClick={this.clickHandler}
            coord={`${gridRowIndex},${elementIndex}`}
          >
            {element}
          </button>
        );
      });
      return row;
    });
    return grid;
  }

  render() {
    const board = this.renderBoardComponent();
    return <div className="board">{board}</div>;
  }
}

export default Game;
