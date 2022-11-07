import React, { useEffect, useRef, useState } from 'react'
import { TodoCtx } from '../../context/TodoContext'
import TodoItem from './TodoItem';
import { Reorder } from "framer-motion/dist/framer-motion"

export default function Todo(props) {
    const { todos, addTodo, deleteTodo, updateTodo } = TodoCtx()
    const [input, setInput] = useState("")
    const inputRef = useRef()
    const [sortedTodos, setSortedTodos] = useState([])

    const inputOnChangeHandler = (e) => {
        setInput(e.target.value)
    }

    const addTodoHandler = (e) => {
        e.preventDefault()
        addTodo({ title: input, createdAt: new Date() })
        setInput("")
    }

    useEffect(() => {
        todos?.length > 0 ? setSortedTodos(todos.sort((a, b) => {
            if (a.isCompleted === b.isCompleted) {
                return b.createdAt - a.createdAt
            } else if (a.isCompleted) {
                return 1
            } else {
                return -1
            }
        })) : setSortedTodos([])
        console.log(sortedTodos);
        // eslint-disable-next-line
    }, [todos]);

    //sort todos by createdAt and isCompleted
    // const sortedTodos = todos.sort((a, b) => {
    //     if (a.isCompleted === b.isCompleted) {
    //         return b.createdAt - a.createdAt
    //     } else if (a.isCompleted) {
    //         return 1
    //     } else {
    //         return -1
    //     }
    // })

    //sort todos by isCompleted 
    // setSortedTodos(todos.sort((a, b) => {
    //     if (a.isCompleted === b.isCompleted) {
    //         return 0
    //     } else if (a.isCompleted) {
    //         return 1
    //     } else {
    //         return -1
    //     }
    // }))

    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">

                    <div className="card" style={{ borderRadius: "15px" }}>
                        <div className="card-body p-5">

                            <h6 className="mb-3">Your not so stressful Todo List</h6>

                            <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={addTodoHandler}>
                                <div className="form-outline flex-fill">
                                    <input type="text" id="form3" className="form-control form-control-lg mb-2"
                                        value={input} ref={inputRef} onChange={inputOnChangeHandler}
                                        autoComplete="off" />
                                    <label className="form-label" htmlFor="form3">What do you need to do today?</label>
                                </div>
                                <button type="submit" className="btn btn-lg ms-2 mb-auto add-button">Add</button>
                            </form>

                            {/* <ul className="list-group mb-0">
                                {sortedTodos.map((item,i) => <TodoItem user={props.user} 
                                title={item.title} 
                                isCompleted={item.isCompleted} 
                                key={item.id} 
                                id={item.id}
                                i={i} 
                                deleteTodoHandler={()=>{deleteTodo(item.id)}}
                                onChange={()=>{updateTodo(item.id, {isCompleted:!item.isCompleted})}} />)}
                            </ul> */}
                            <div className='list-parent'>

                                <Reorder.Group values={sortedTodos} onReorder={setSortedTodos}>
                                    {sortedTodos.map((item, i) =>
                                        <Reorder.Item key={item.id} value={item} as="li">
                                            <TodoItem user={props.user}

                                                title={item.title}
                                                isCompleted={item.isCompleted}
                                                key={item.id}
                                                id={item.id}
                                                i={i}
                                                deleteTodoHandler={() => { deleteTodo(item.id) }}
                                                onChange={() => { updateTodo(item.id, { isCompleted: !item.isCompleted }) }} />

                                        </Reorder.Item>)}
                                </Reorder.Group>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
