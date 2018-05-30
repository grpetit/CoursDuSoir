import React, { Component } from 'react'

class AppChild extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "charles henri",
            dadsName: this.props.dadsName
        }


    }
    toto(name){
        this.props.toto(name)
    }    

    render() {
        return (
            <div>
                <h2>AppChild</h2>
                <p>state : {JSON.stringify(this.state)}</p>
                <p>props : {JSON.stringify(this.state)}</p>
                <button onClick={()=>this.toto(this.state.name)} >Click me</button>
            </div>
        )
    }
}

export default AppChild