import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const titre = "mon application"
        const listTasks = "List"
        const newTask = "New"
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">{titre}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/">{listTasks} </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/new">{newTask}</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

);
    }
}

export default Header