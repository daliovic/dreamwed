import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNav.module.css'
function MainNavItem(props) {
    return (
        <li className='mx-2'>
            <NavLink className={`${classes['nav-list-item']} p-4`} to={props.link}>
                <i className={classes['svg-icon']}>
                    <props.icon size={28}/>
                </i>
                <span>
                    {props.text}
                </span>
            </NavLink>
        </li>
    );
}

export default MainNavItem;