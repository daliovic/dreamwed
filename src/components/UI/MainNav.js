import React from 'react';
import { AiOutlineCalculator } from 'react-icons/ai';
import { GoChecklist } from 'react-icons/go';
import { MdPeopleOutline } from 'react-icons/md'
import MainNavItem from './MainNavItem';
import { motion } from "framer-motion/dist/framer-motion"

const NAV_ITEMS = [
    { text: "Budget", link: "/budget" },
    { text: "Checklist", link: "/checklist" },
    { text: "Invitation", link: "/invitation" },
]
const NAV_ICONS = [AiOutlineCalculator, GoChecklist, MdPeopleOutline]


function MainNav(props) {
    return (
        <motion.div layout className="row">
            <div className="d-flex border-top border-bottom justify-content-center">
                <ul className='list-group list-group-horizontal'>
                    {NAV_ITEMS.map((item, i) => <MainNavItem text={item.text} link={item.link} key={i} icon={NAV_ICONS[i]} />)}
                </ul>
            </div>
        </motion.div>
    );
}

export default MainNav;