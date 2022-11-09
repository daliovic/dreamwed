import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import { CollectionsCtx } from '../../context/CollectionsContext'

function AddCategory(props) {
  const [show, setShow] = useState(false)
  const { addCategory } = CollectionsCtx()
  const nameRef = useRef()
  const { user } = UserAuth()

  const addCategoryHandler = () => {
    addCategory({ name: nameRef.current.value, uid: user.uid, cost: 0, createdAt: new Date() })
    setShow(false)
    console.log(nameRef.current.value)
  }
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <li className={`list-group-item add-link`}>
        <Link to={`/budget/`} state={{ category: props.name }} onClick={handleShow}>
          <div className='d-flex  justify-content-start'>
            <i className='p-2'>
              <props.icon size={20} />
            </i>
            <div className='p-2'>{'Add Category'}</div>
          </div>
        </Link>
      </li>

      <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor='categoryName'>Category name:</label>
          <input
            name='categoryName'
            type='text'
            className='form-control mt-2'
            ref={nameRef}
            autoFocus
            autoComplete='off'
            onKeyDown={(e) => {
              if (e.keyCode === 13) addCategoryHandler()
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='light' onClick={handleClose}>
            Cancel
          </Button>
          <button onClick={addCategoryHandler} className=' mx-2 btn btn-outline-light add-button'>
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddCategory
