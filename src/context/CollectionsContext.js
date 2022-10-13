import 'firebase/compat/firestore'
import { createContext, useContext, useEffect, useState } from 'react'// eslint-disable-next-line
import {
    collection, getFirestore, onSnapshot,
    addDoc, query, orderBy, deleteDoc, doc, updateDoc
} from 'firebase/firestore'

const db = getFirestore()


const CollectionsContext = createContext()

export const CollectionsContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [expenses, setExpenses] = useState([]);

    const expensesRef = collection(db, 'expenses');
    const categoriesRef = collection(db, 'categories');


    const addExpense = (value) => {
        addDoc(expensesRef, value)
    }
    const deleteExpense = (id) => {
        deleteDoc(doc(expensesRef, id))
    }
    const updateExpense = (id, value) => {
        updateDoc(doc(expensesRef, id), value)
    }

    const deleteCategory = (id) => {
        deleteDoc(doc(categoriesRef, id)).catch(err => console.log(err))
    }

    const addCategory = (value) => {
        addDoc(categoriesRef, value)
    }
    const updateCategory = (id, value) => {
        updateDoc(doc(categoriesRef, id), value)
    }

    useEffect(() => {
        const expensesRef = collection(db, 'expenses');
        const categoriesRef = collection(db, 'categories');

        onSnapshot(categoriesRef, (snapshot) => {
            setCategories([]);
            snapshot.docs.forEach(doc => {
                setCategories(prevState => [...prevState, { ...doc.data(), id: doc.id }])
            })
        })

        const q = query(expensesRef, orderBy("createdAt"))
        onSnapshot(q, (snapshot) => {
            setExpenses([]);
            snapshot.docs.forEach(doc => {
                setExpenses(prevState => [...prevState, { ...doc.data(), id: doc.id }])
            })
        })
    }, []);




    return (
        <CollectionsContext.Provider value={{
            categories, expenses,
            updateExpense, deleteExpense, addExpense,
            deleteCategory, addCategory, updateCategory
        }}>
            {children}
        </CollectionsContext.Provider>
    )
}

export const CollectionsCtx = () => {
    return useContext(CollectionsContext)
}