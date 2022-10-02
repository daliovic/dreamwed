import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

import logo from "../../assets/DreamWed Logo.svg"


function Header(props) {

  const onLogin = (e) => {
    props.loginHandler(e)
  }

  const onLogout = (e) => {
    props.logoutHandler(e)
  }
  return (
    <Navbar className="row">
      <Container fluid className="col-9 pt-3 mb-3">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="150"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Navbar.Text className='fluid'>
          {(props.user === null) ?
            <a href="/" onClick={onLogin}>Login</a> :
            <div className='d-flex'>
              <span>{props.user.displayName}</span>
              <a href="/" onClick={onLogout}>
                <img src={props.user.photoURL} alt="" width={30} className="ms-2 rounded-circle" />
              </a>
            </div>}
          {/* eslint-disable-next-line  */}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;