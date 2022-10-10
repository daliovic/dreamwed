import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).catch(error => { console.log(error) })
    }

    const logOut = () => {
        signOut(auth).catch(error => { console.log(error) })
    }

    // const handleAuthStateChange = async (userCredential) => {
    //     console.log(userCredential);
    //   };

    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
            })
        }
        return () => {
            unsubscribe()
        }
    }, []);
    useEffect(() => {
        

        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
      }, []);


    return (
        <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}