import 'firebase/compat/firestore'
import { createContext, useContext, useEffect, useState } from 'react'
import {
  collection,
  getFirestore,
  onSnapshot,
  addDoc,
  query,
  deleteDoc,
  doc,
  updateDoc,
  where,
} from 'firebase/firestore'
import { UserAuth } from './AuthContext'

const db = getFirestore()

const TodoContext = createContext()
export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  const { user } = UserAuth()
  const todosRef = collection(db, 'todos')

  const addTodo = (value) => {
    addDoc(todosRef, { ...value, uid: user.uid, isCompleted: false })
  }

  const updateTodo = (id, value) => {
    updateDoc(doc(todosRef, id), value)
  }
  const deleteTodo = (id) => {
    deleteDoc(doc(todosRef, id))
  }

  useEffect(() => {
    if (user && user.uid) {
      const todosRef = collection(db, 'todos')

      onSnapshot(query(todosRef, where('uid', '==', user.uid)), (snapshot) => {
        setTodos([])
        snapshot.docs.forEach((doc) => {
          setTodos((prevState) => [...prevState, { ...doc.data(), id: doc.id }])
        })
      })
    }
  }, [user])

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
      }}>
      {children}
    </TodoContext.Provider>
  )
}

export const TodoCtx = () => {
  return useContext(TodoContext)
}
