import React from 'react';


function BudgetSidebarItem(props) {
    return (
            <li className={`${props.name==="Jewelry"? "highlight":""} list-group-item`}>
                    <a href='/'>
                        <div className='d-flex  justify-content-start'>
                            <i className='p-2'><props.icon size={20}/></i>
                            <div className='p-2'>{props.name}</div>
                            <div className='py-2 ms-auto '>{`$${props.cost} >`}</div>
                        </div>
                    </a>
                            {props.name==="Jewelry" && <div className='position-absolute top-0 end-0 highlight-bar'></div>}
                </li>
    );
}

export default BudgetSidebarItem;