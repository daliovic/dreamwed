import React from 'react';
import {useParams } from 'react-router-dom';
// eslint-disable-next-line
import classes from './BudgetSidebar.module.css'
import BudgetSidebarItem from './BudgetSidebarItem';

function BudgetSidebar(props) {
    const {id} = useParams()
    return (
        <div className='col-4 me-5'>
            <ul className='list-group'>
                {props.categories.map((item, i) => <BudgetSidebarItem icon={item.icon} name={item.name} index={i} cost={item.cost} key={i}/>)}
            </ul>
            <p onClick={()=> {
    console.log(id);}}>Click</p>
        </div>
    );
}

export default BudgetSidebar;