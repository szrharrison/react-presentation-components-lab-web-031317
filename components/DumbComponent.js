import React, { Component } from 'react'

class DumbComponent extends Component {
  constructor() {
    super()

    this.state = {
      mood: 'happy'
    }
  }

  handleClick(event) {
    const mood = this.state.mood === 'happy' ? 'sad' : 'happy'

    this.setState({
      mood: mood
    })
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        <p>{this.state.mood}</p>
      </div>
    )
  }
}

export default DumbComponent
