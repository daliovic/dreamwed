import React from 'react';
import { BiPencil } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import { FiPlusCircle } from 'react-icons/fi';
import classes from './CategoryMain.module.css'

function CategoryMain(props) {
    return (
        <div className='d-flex h-100 border border-1 rounded col-8 ml-4 py-2 justify-content-center flex-column'>
            <div className="mt-4 mb-auto mx-auto d-flex flex-column ">
                <props.catergory.icon className=" mx-auto border border-1 rounded-circle p-2 m-2" size={50} />
                <h4 className=" mx-auto">{props.catergory.name} <a href='/'><i><BiPencil color='A663CC' /></i></a></h4>
                <div style={{ fontSize: "0.9rem" }}>
                    <span className=" mx-2">{`Estimated cost: $${props.catergory.cost}`}</span>
                    <span className=" mx-2">{`Final cost: $${props.catergory.cost}`}</span>
                    <button className=" mx-2 btn btn-outline-light" style={{ color: "gray" }}>Remove <i><BsTrash color='gray' /></i></button>
                </div>
                <div className={`${classes.bar} mx-auto my-3`}></div>
            </div>
            <ul className='list-group mt-3 mb-auto h-100'>
                <li className={`${classes["expenses-item"]} list-group-item 
                    border-0 border-bottom border-top rounded-0 d-flex`}>
                    <span className=" my-auto col-4">EXPENSE</span>
                    <span className=" my-auto col-3 ms-auto text-end">ESTIMATED COST</span>
                    <span className=" my-auto col-2 ms-auto text-end">FINAL COST</span>
                    <span className=" my-auto col-1 ms-auto text-end">PAID</span>
                    <span className=" my-auto ms-auto">...</span>
                </li>
                <li className={`${classes["expenses-item"]} list-group-item 
                    border-0 border-bottom rounded-0 d-flex`}>
                    <span className=" my-auto col-4">Venue</span>
                    <span className=" my-auto col-3 ms-auto text-end">{`$4000`}</span>
                    <span className=" my-auto col-2 ms-auto text-end">{`$3800`}</span>
                    <span className=" my-auto col-1 ms-auto text-end">{`$500`}</span>
                    <span className=" my-auto ms-auto">...</span>
                </li>
                <li className={`${classes["expenses-item"]} list-group-item 
                    border-0 border-bottom rounded-0 d-flex`}>
                    <span className=" my-auto col-4">Band</span>
                    <span className=" my-auto col-3 ms-auto text-end">{`$3000`}</span>
                    <span className=" my-auto col-2 ms-auto text-end">{`$2500`}</span>
                    <span className=" my-auto col-1 ms-auto text-end">{`$300`}</span>
                    <span className=" my-auto ms-auto">...</span>
                </li> 
                <li className={`${classes["expenses-item"]} list-group-item 
                    border-0 border-bottom rounded-0 d-flex`}>
                    <span className=" my-auto col-4">Juice</span>
                    <span className=" my-auto col-3 ms-auto text-end">{`$500`}</span>
                    <span className=" my-auto col-2 ms-auto text-end">{`$500`}</span>
                    <span className=" my-auto col-1 ms-auto text-end">{`$0`}</span>
                    <span className=" my-auto ms-auto">...</span>
                </li> 
                <li className={`${classes["expenses-item"]} ${classes["add"]} list-group-item 
                    border-0 border-bottom rounded-0 d-flex`}>
                    <span className=" my-auto"><FiPlusCircle/>{` Add new expense`}</span>
                </li> 
                <li className={`${classes["expenses-item"]} list-group-item 
                    border-0 border-top rounded-0 d-flex mt-auto`}>
                    <span className=" my-auto col-4 fw-bolder">Total</span>
                    <span className=" my-auto col-3 ms-auto text-end fw-bolder">{`$7500`}</span>
                    <span className=" my-auto col-2 ms-auto text-end fw-bolder">{`$6800`}</span>
                    <span className=" my-auto col-1 ms-auto text-end fw-bolder">{`$800`}</span>
                    <span className=" my-auto ms-auto">...</span>
                </li>  
                
            </ul>
        </div>
    );
}

export default CategoryMain;