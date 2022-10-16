import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { MdModeEditOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { TodoCtx } from '../../context/TodoContext';

export default function UpdateTodo(props) {
    const [show, setShow] = useState(false);
    const { updateTodo } = TodoCtx();
    const [inputValue, setInputValue] = useState(props.title);
    const titleRef = useRef()



    const updateTodoHandler = () => {
        updateTodo(props.id, { title: titleRef.current.value });
        setShow(false);
        console.log(titleRef.current.value);
    }
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault();
        console.log('show');
        setShow(true); }
    useEffect
        (() => {
            setInputValue(props.title);
        }, [props.title]);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

            <Link onClick={ handleShow } className='me-2'>
                <MdModeEditOutline size={20}/>
            </Link>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit todo title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="categoryName" >Todo title:</label>
                    <input
                        name="categoryName"
                        type="text"
                        className='form-control mt-2'
                        ref={titleRef}
                        value={inputValue}
                        onChange={() => setInputValue(titleRef.current.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={handleClose}>
                        Cancel
                    </Button>
                    <button
                        onClick={updateTodoHandler}
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
