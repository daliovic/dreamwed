import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainNav.module.css'
import { motion } from 'framer-motion/dist/framer-motion'
function MainNavItem(props) {
  const iconVariants = {
    rest: {
      scale: 1,
      transition: {
        duration: 0.9,
        type: 'tween',
        ease: [0.325, -0.005, 0.25, 1.0],
      },
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.9,
        type: 'tween',
        ease: [0, 0, 0.25, 1.0],
      },
    },
  }

  const spanVariants = {
    rest: {
      originY: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        type: 'tween',
        ease: [0.325, -0.005, 0.25, 1.0],
      },
    },
    hover: {
      originY: 0,
      scale: 1.1,
      transition: {
        duration: 0.9,
        type: 'tween',
        ease: [0, 0, 0.25, 1.0],
      },
    },
  }

  return (
    <motion.li initial='rest' whileHover='hover' animate='rest' className='mx-2'>
      <NavLink className={`${classes['nav-list-item']} p-4`} to={props.link}>
        <motion.i variants={iconVariants} className={classes['svg-icon']}>
          <props.icon size={28} />
        </motion.i>
        <motion.span variants={spanVariants}>{props.text}</motion.span>
      </NavLink>
    </motion.li>
  )
}

export default MainNavItem
