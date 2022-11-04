import React from 'react';
import { AiOutlineCalculator } from 'react-icons/ai';
import { GoChecklist } from 'react-icons/go';
import { MdPeopleOutline, MdOutlineMarkEmailRead } from 'react-icons/md'
import MainNavItem from './MainNavItem';
const NAV_ITEMS = [
    { text: "Budget", link: "/budget" },
    { text: "Checklist", link: "/checklist" },
    { text: "Invitation", link: "/invitation" },
    { text: "Guests List", link: "/guestList" },
]
const NAV_ICONS = [AiOutlineCalculator, GoChecklist, MdOutlineMarkEmailRead, MdPeopleOutline]


function MainNav(props) {
    return (
        <div className="row">
            <div className="d-flex border-top border-bottom justify-content-center">
                <ul className='list-group list-group-horizontal'>
                    {NAV_ITEMS.map((item, i) => <MainNavItem text={item.text} link={item.link} key={i} icon={NAV_ICONS[i]} />)}
                </ul>
            </div>
        </div>
    );
}

export default MainNav;