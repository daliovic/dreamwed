import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion/dist/framer-motion'

export default function HomeCard({ title, description, image, link }) {
  const cardVariants = {
    hover: {
      scale: 1.04,
      filter: 'drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.19))',
      transition: {
        duration: 0.8,
        ease: [0.325, -0.005, 0.25, 1.0],
      },
    },
    rest: {
      scale: 1,
      filter: 'drop-shadow(0px 0px 3px rgba(0, 0, 0, 0))',
      transition: {
        duration: 0.8,
        ease: [0.325, -0.005, 0.25, 1.0],
      },
    },
  }
  return (
    <motion.div
      variants={cardVariants}
      initial='rest'
      whileHover='hover'
      animate='rest'
      className='card card-custom col-4 border-white border-0'
      style={{}}>
      <Link to={link}>
        <div className='card-custom-img'></div>
        <div className='card-custom-avatar' style={{ minHeight: '200px' }}>
          <img className='img-fluid col-12 px-3 my-auto' src={image} alt='Avatar' />
        </div>
        <div className='card-body' style={{ overflowY: 'auto' }}>
          <h4 className='card-title'>{title}</h4>
          <p className='card-text'>{description} </p>
        </div>
        <div className='card-footer d-flex border-0' style={{ background: 'inherit' }}>
          <Link to={link} className='btn main-button mx-auto col-12'>
            {title}
          </Link>
        </div>
      </Link>
    </motion.div>
  )
}
