import React, { Component } from 'react'
import { Card, Button, CardTitle } from 'reactstrap';

class Task extends Component {
    render () {
        return (
                <Card body>
                    <CardTitle>{this.props.task.title}</CardTitle>
                    <Button  onClick={()=>this.props.updatePedro(this.props.index)}>{this.props.task.isDone} </Button>
                </Card>
        )
    }
}

export default Task