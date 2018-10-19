import React, { Component } from 'react'

import {NavLink} from 'react-router-dom'

class Header extends Component {
    render () {
        const titre="mon application"
        const listTasks="List"
        const newTask="New"
        return (
            <div>
                {titre}  
                <NavLink to="/">{listTasks} </NavLink>/
                <NavLink to="/new">{newTask}</NavLink>
            </div>
        )
    }
}

export default Header