import 'firebase/compat/firestore'
import { createContext, useContext, useEffect, useState } from 'react'
import { collection, getFirestore, getDocs } from 'firebase/firestore'

// import firebase from 'firebase/compat/app'
// const firestore = firebase.firestore()
// import { useCollectionData } from 'react-firebase-hooks/firestore'

const db = getFirestore()







const CollectionsContext = createContext()

export const CollectionsContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);// eslint-disable-next-line
    const [expenses, setExpenses] = useState([]);


    useEffect(() => {

        const categoriesRef = collection(db, 'categories');
        getDocs(categoriesRef).then((snapshot) => {
           // console.log(snapshot.docs.length);
            snapshot.docs.forEach(doc => {
                setCategories(prevState => [...prevState,{...doc.data(), id: doc.id} ])
                //categories.push({ ...doc.data(), id: doc.id })
            })
            //console.log(categories + " FROM CTX");
        }).catch(err => { console.log(err.message) })

        const expensesRef = collection(db, 'expenses');
        getDocs(expensesRef).then((snapshot) => {
            snapshot.docs.forEach(doc => {
                setExpenses(prevState => [...prevState,{...doc.data(), id: doc.id} ])
                // setCategories(prevState => {return[...prevState,  {...doc.data(), id: doc.id} ]})
                // expenses.push({ ...doc.data(), id: doc.id })
            })
        }).catch(err => { console.log(err.message) })
    }, []);


    // const categoriesRef = firestore.collection('categories');
    // let query = categoriesRef.orderBy('createdAt').limit(25)
    // const categories = useCollectionData(query)

    // const expensesRef = firestore.collection('expenses');
    // query = expensesRef.orderBy('createdAt').limit(25)
    // const expenses = useCollectionData(query)




    return (
        <CollectionsContext.Provider value={{ categories, expenses }}>
            {children}
        </CollectionsContext.Provider>
    )
}

export const CollectionsCtx = () => {
    return useContext(CollectionsContext)
}