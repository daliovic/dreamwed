import React from 'react';
import classes from './MainNav.module.css'
function MainNavItem(props) {
    return (
        <li>
            <a className={`${classes['nav-list-item']} p-4`} href="/">
                <i className={classes['svg-icon']}>
                    <props.icon size={28}/>
                </i>
                <span>
                    {props.text}
                </span>
            </a>
        </li>
    );
}

export default MainNavItem;