import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { CollectionsCtx } from '../../context/CollectionsContext';
import { BiPencil } from 'react-icons/bi';

function AddCategory(props) {
    const [show, setShow] = useState(false);
    const { updateCategory } = CollectionsCtx();
    const [inputValue, setInputValue] = useState(props.name);
    const nameRef = useRef()



    const addCategoryHandler = () => {
        updateCategory(props.id,{ name: nameRef.current.value});
        setShow(false);
        console.log(nameRef.current.value);
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        setInputValue(props.name);
    }, [props.name]);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

            <Link onClick={handleShow}>
                <i><BiPencil color='A663CC' /></i>
            </Link>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="categoryName" >Category name:</label>
                    <input
                        name="categoryName"
                        type="text"
                        className='form-control mt-2'
                        ref={nameRef} 
                        value={inputValue}
                        onChange={()=> setInputValue(nameRef.current.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={handleClose}>
                        Cancel
                    </Button>
                    <button
                        onClick={addCategoryHandler}
                        className=" mx-2 btn btn-outline-light"
                        style={{ color: "white", backgroundColor: "#A663CC" }}>
                        Update
                    </button>
                    {/* <Button variant="primary">Understood</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddCategory;