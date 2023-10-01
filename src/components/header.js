import { Link, NavLink } from 'react-router-dom';


import React from 'react';
import { Container, Dropdown } from 'react-bootstrap';


function Header(props) {
    let user = props['user']


    return (
        <header className="p-3 mb-3 border-bottom">
            <Container>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav nav-pills col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                    </ul>


                    {user && (
                        <Dropdown className='text-end' >
                            <Dropdown.Toggle size="sm" variant="light" id="dropdown-autoclose-true">
                                <i className="bi bi-person"></i> {user.username}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='text-small'>
                                <Link className="dropdown-item" to="/profile">Profile</Link>
                                <Dropdown.Divider />
                                <Link className="dropdown-item" to="/logout">Logout</Link>
                            </Dropdown.Menu>
                        </Dropdown>

                    )

                    }

                </div>
            </Container>
        </header>
    );
}
export default Header;