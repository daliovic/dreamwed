import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNav.module.css'
import { motion } from "framer-motion/dist/framer-motion"
function MainNavItem(props) {
    //define list item variants for hover animation
    const listItemVariants = {
        initial: {
            scale:1,
            transition: {
                duration: 0.8,
                ease: "easeIn"
            }
            
        },
        hover: {
            scale: 1.2,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    }




    return (
        <motion.li variants={listItemVariants} initial="initial" className='mx-2'>
            <NavLink className={`${classes['nav-list-item']} p-4`} to={props.link}>
                <motion.i variants={listItemVariants}  initial="initial" whileHover="hover" className={classes['svg-icon']}>
                    <props.icon size={28}/>
                </motion.i>
                <span>
                    {props.text}
                </span>
            </NavLink>
        </motion.li>
    );
}

export default MainNavItem;