import React from 'react';

const OneExpense = (props) => {
    return (

        <li className={`${props.classes["expenses-item"]} list-group-item 
                    border-0 border-bottom rounded-0 d-flex`}>
            <span className=" my-auto col-4">Venue</span>
            <span className=" my-auto col-3 ms-auto text-end">{`$4000`}</span>
            <span className=" my-auto col-2 ms-auto text-end">{`$3800`}</span>
            <span className=" my-auto col-1 ms-auto text-end">{`$500`}</span>
            <span className=" my-auto ms-auto">...</span>
        </li>
    );
};

export default OneExpense;