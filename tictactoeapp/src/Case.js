import React, { Component } from "react";

class Case extends Component {
  constructor(props) {
    super(props);
    this.state = { content: props.value };
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
      this.props.onClick();
    
  }
  render() {
    return (
      <div onClick={this.onClick}>
        {this.state.content}
      </div>
    );
  }
}

export default Case;
