import React from 'react'
import loginVector from '../../assets/images/login-vector.png'
import googleButton from '../../assets/images/btn_google_signin_light_normal_web@2x.png'
import { UserAuth } from '../../context/AuthContext'
import { motion, AnimateSharedLayout } from "framer-motion/dist/framer-motion"


export default function Login() {
    const { googleSignIn, logOut, user } = UserAuth()
    const onLogin = async (e) => {
        e.preventDefault()
        try {
            await googleSignIn();


        } catch (error) {
            console.log(error);
        }
    }

    const vectorVariants = {
        hover: {
            scale: 1.03,
            rotate: 5,
            transition: {
                duration: 2,
                ease: [0.325, -0.005, 0.250, 1.000],
                delay: 0.1
            }
        },
        rest: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 2,
                ease: [0.325, -0.005, 0.250, 1.000]
            }
        }
    }

    const buttonVariants = {
        hover: {
            scale: 1.05,
            cursor: 'pointer',
            filter: "drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.19))",
            transition: {
                duration: 0.3,
                ease: [0.325, -0.005, 0.250, 1.000],
            }
        },
        rest: {
            scale: 1,
            filter: "drop-shadow(0px 0px 3px rgba(0, 0, 0, 0))",
            transition: {
                duration: 0.5,
                ease: [0.325, -0.005, 0.250, 1.000]
            }
        }
    }
    const h2Variants = {
        hover: {
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            }
        },
        rest: {
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }


    return (
        <div className="container py-5 d-flex flex-fill">
            <div className="row d-flex justify-content-center align-items-center  col-12 my-auto">
                <div className="col col-xl-10 d-flex">
                    <div className='col-6 d-flex'>
                        <motion.img
                            variants={vectorVariants}
                            initial="rest" whileHover="hover" animate="rest"
                            className='image-fluid mx-auto my-auto col-10'
                            src={loginVector} alt="Flourish frame" />
                    </div>

                        <motion.div layout className='col-6 mb-5 flex-column d-flex align-items-center justify-content-center'>
                            <motion.h4 className=''>Please login to continue</motion.h4>
                            <motion.img layout
                                onClick={onLogin}
                                variants={buttonVariants}
                                initial="rest" whileHover="hover" animate="rest"
                                className="col-6" src={googleButton} alt="Google button" />
                        </motion.div>
                </div>
            </div>
        </div>
    )
}
