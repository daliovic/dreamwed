import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import logo from "../../assets/DreamWed Logo.svg"
import { UserAuth } from '../../context/AuthContext';
import { motion } from "framer-motion/dist/framer-motion"
//import exit icon
import { FaSignOutAlt } from 'react-icons/fa';


function Header() {


  const navigate = useNavigate();

  const { googleSignIn, logOut, user } = UserAuth()
  const onLogin = async (e) => {
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
  const iconVariants = {
    hover: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeOut"
      }
    },
    rest: {
      x: -10,
      opacity: 0,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeOut"
      }
    }
  }
  return (
    // <motion.div layout>
      <Navbar className="row">
        <Container fluid className="col-9 pt-3 mb-3">
          {/* <Link to="/"> */}
          <Navbar.Brand href="/" onClick={(e) => { e.preventDefault(); navigate('/') }}>
            <img
              src={logo}
              width="150"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          {/* </Link> */}

          <Navbar.Text className='fluid'>
            {(user === null) ?
              <a href="/" onClick={onLogin}>Login</a> :
              <motion.div whileHover="hover" className='d-flex'>
                <motion.span>{user.displayName}</motion.span>
                <Link onClick={onLogout}>
                  <motion.div whileHover="hover" initial="rest" animate="rest" className='d-flex'>
                    <motion.img src={user.photoURL} alt="" width={30} className="mx-3 rounded-circle" />
                    <motion.span>Logout</motion.span>
                    <motion.i variants={iconVariants} >
                      <FaSignOutAlt className='ms-2 mb-n5' size={14} />
                    </motion.i>
                  </motion.div>
                </Link>
              </motion.div>}
            {/* eslint-disable-next-line  */}
          </Navbar.Text>
        </Container>
      </Navbar>
    // </motion.div>
  );
}

export default Header;