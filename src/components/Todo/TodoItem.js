import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDelete } from 'react-icons/md'
import UpdateTodo from './UpdateTodo'
import { motion } from "framer-motion/dist/framer-motion"

export default function TodoItem(props) {
    return (
        <motion.li
            initial={{ opacity: 0 , x:50}}
            animate={{ opacity: 1, x:0 }}
            transition={{duration:0.75, delay: 0.15*props.i }}
            className="list-group-item d-flex border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
            <div className={`d-flex align-items-center ${props.isCompleted ? " todo-complete" : ""}`}>
                <input className="form-check-input me-2 custom-control-input" type="checkbox" onChange={props.onChange} checked={props.isCompleted} aria-label="..." />
                {props.title}
            </div>
            <div className='ms-auto'>

                <UpdateTodo id={props.id} title={props.title} />

                <Link onClick={() => { props.deleteTodoHandler() }} data-mdb-toggle="tooltip" title="Remove item">
                    <MdOutlineDelete size={20} />
                </Link>
            </div>

        </motion.li>
    )
}
