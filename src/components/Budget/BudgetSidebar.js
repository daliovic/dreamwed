import React from 'react';
// eslint-disable-next-line
import classes from './BudgetSidebar.module.css'
import {AiOutlinePlus} from 'react-icons/ai'
import BudgetSidebarItem from './BudgetSidebarItem';


function BudgetSidebar(props) {
    return (
        <div className='col-4 me-5'>
            <ul className='list-group'>
                <BudgetSidebarItem icon={AiOutlinePlus} name={"Add Category"} index={-1} cost={""} key={"addCategory"} />
                {props.categories.map((item, i) =>
                    <BudgetSidebarItem
                        icon={item.icon}
                        name={item.name}
                        index={i}
                        cost={item.cost}
                        key={i} />)}
            </ul>
        </div>
    );
}

export default BudgetSidebar;