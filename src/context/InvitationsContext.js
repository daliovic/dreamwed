import 'firebase/compat/firestore'
import { createContext, useContext, useEffect, useState } from 'react'
import {
  collection,
  getFirestore,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
  where,
} from 'firebase/firestore'
import { UserAuth } from './AuthContext'
import { Slide, toast } from 'react-toastify'

const db = getFirestore()

const InvitationContext = createContext()
export const InvitationContextProvider = ({ children }) => {
  const [invitations, setInvitations] = useState([])

  const { user } = UserAuth()
  const invitationsRef = collection(db, 'Invitations')

  const addInvitation = (value) => {
    addDoc(invitationsRef, { ...value, uid: user.uid }).then(() => {
      toast.success('Invitation added successfully', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
        theme: 'light',
      })
    })
  }

  const updateInvitation = (id, value) => {
    updateDoc(doc(invitationsRef, id), value).then(() => {
      toast.success('Invitation updated successfully', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
        theme: 'light',
      })
    })
  }
  const deleteInvitation = (id) => {
    deleteDoc(doc(invitationsRef, id)).then(() => {
      toast.error('Invitation deleted successfully', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
        theme: 'light',
      })
    })
  }

  useEffect(() => {
    if (user && user.uid) {
      const invitationsRef = collection(db, 'Invitations')

      onSnapshot(query(invitationsRef, where('uid', '==', user.uid)), orderBy('createdAt'), (snapshot) => {
        setInvitations([])
        snapshot.docs.forEach((doc) => {
          setInvitations((prevState) => [...prevState, { ...doc.data(), id: doc.id }])
        })
      })
    }
  }, [user])

  return (
    <InvitationContext.Provider
      value={{
        invitations,
        addInvitation,
        updateInvitation,
        deleteInvitation,
      }}>
      {children}
    </InvitationContext.Provider>
  )
}

export const InvitationCtx = () => {
  return useContext(InvitationContext)
}
