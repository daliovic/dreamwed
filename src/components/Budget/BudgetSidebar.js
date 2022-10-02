import React from 'react';
// eslint-disable-next-line
import classes from './BudgetSidebar.module.css'
import { GiDiamondRing } from 'react-icons/gi';
import BudgetSidebarItem from './BudgetSidebarItem';

function BudgetSidebar(props) {
    return (
        <div className='col-4 me-5'>
            <ul className='list-group'>
                {props.categories.map((item, i) => <BudgetSidebarItem icon={item.icon} name={item.name} cost={item.cost} key={i}/>)}
            </ul>
        </div>
    );
}

export default BudgetSidebar;