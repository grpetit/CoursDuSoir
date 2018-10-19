import React, { Component } from 'react'
import Task from './Task'

const list = [
    { title: "tache numéro 1", isDone: "false" },
    { title: "tache numéro 2", isDone: "false" },
    { title: "tache numéro 3", isDone: "true" },
]

class ListTasks extends Component {
    constructor (props) {
        super(props)
        this.state={
            pedro: list
        }
    }

    updateList=(taskIndex)=>{

        const pedroTmp = this.state.pedro
        pedroTmp[taskIndex].isDone = pedroTmp[taskIndex].isDone==="true"?"false":"true"

        this.setState({pedro:pedroTmp})
    }
    
    render() {
        return (
            <div>
                {
                    this.state.pedro.map((item, index) => <Task task={item} updatePedro={this.updateList} index={index}/>)
                }
            </div>
        )
    }
}

export default ListTasks