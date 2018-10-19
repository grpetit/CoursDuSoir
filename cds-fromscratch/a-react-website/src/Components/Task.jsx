import React, { Component } from 'react'

class Task extends Component {
    render () {
        return (
            <div onClick={()=>this.props.updatePedro(this.props.index)}>
                {this.props.task.title} /
                {this.props.task.isDone} 
            </div>
        )
    }
}

export default Task