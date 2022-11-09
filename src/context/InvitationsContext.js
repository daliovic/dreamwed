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

const db = getFirestore()

const InvitationContext = createContext()
export const InvitationContextProvider = ({ children }) => {
  const [invitations, setInvitations] = useState([])

  const { user } = UserAuth()
  const invitationsRef = collection(db, 'Invitations')

  const addInvitation = (value) => {
    addDoc(invitationsRef, { ...value, uid: user.uid })
  }

  const updateInvitation = (id, value) => {
    updateDoc(doc(invitationsRef, id), value)
  }
  const deleteInvitation = (id) => {
    deleteDoc(doc(invitationsRef, id))
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
