// repurposed example from:
// https://reactstrap.github.io/components/navbar/

import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoIosContact, IoIosSettings, IoIosPulse,  } from 'react-icons/io';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginData: null,
            loginMessage: null
        }
    }

    render() {
        return (
            <div>
                <Navbar className="nav" color="light" light expand="md">
                    <NavbarBrand><Link to="/map">pyroiscycles</Link></NavbarBrand>

                    <Nav className="ml-auto" navbar>
                        <NavItem>{this.state.loginMessage}</NavItem>
                        <NavItem>
                            {localStorage.getItem('user') ?
                            <Link to="/account"><IoIosContact size={32} /></Link>
                           
                            :
                            <Link to="/map/login"><IoIosContact size={32} /></Link>
                            }
                            {/* temp link to account */}
                            {localStorage.getItem('user') &&
                            <Link to="/voucher"><IoIosSettings size={32} /></Link>
                            }
							<Link to="/staff"><IoIosPulse size={32} /></Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}


export default Navigation;