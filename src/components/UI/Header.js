import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

import logo from "../../assets/DreamWed Logo.svg"
import { UserAuth } from '../../context/AuthContext';


function Header() {

  const { googleSignIn, logOut, user} = UserAuth()


  const onLogin = async(e) => {
    e.preventDefault()
    try {
      await googleSignIn();


    } catch (error) {
      console.log(error);
    }
  }

  const onLogout = () => {
    logOut()
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
          {(user === null) ?
            <a href="/" onClick={onLogin}>Login</a> :
            <div className='d-flex'>
              <span>{user.displayName}</span>
              <span className='ms-3' onClick={onLogout}>
                <img src={user.photoURL} alt="" width={30} className="me-2 rounded-circle" /> 
                Logout
              </span>
            </div>}
          {/* eslint-disable-next-line  */}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;