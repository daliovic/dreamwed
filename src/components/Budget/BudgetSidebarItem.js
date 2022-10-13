import React from 'react';
import { Link, useParams } from 'react-router-dom';
import AddCategory from './AddCategory';


function BudgetSidebarItem(props) {
    const { id } = useParams()

    if (props.index === -1) {
        return (<>
            <AddCategory icon={props.icon}/>
            </>)
    }
    return (

        <li className={` list-group-item`}>
            <Link to={`/budget/${props.index}`} state={{ category: props.name }} >
                <div className='d-flex  justify-content-start'>
                    <i className='p-2'><props.icon size={20} /></i>
                    <div className='p-2'>{props.name}</div>
                    <div className='py-2 ms-auto '>{`$${props.cost} >`}</div>
                </div>
            </Link>
            {+id === +props.index && <div className='position-absolute top-0 end-0 highlight-bar'></div>}
        </li >
    );
}

export default BudgetSidebarItem;