import React, { useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { FiPlusCircle } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { CollectionsCtx } from '../../context/CollectionsContext'
import classes from './CategoryMain.module.css'
import OneExpense from './OneExpense'
import UpdateCategory from './UpdateCategory'
import { motion } from 'framer-motion/dist/framer-motion'

function CategoryMain(props) {
  const { expenses, deleteCategory } = CollectionsCtx()
  const { addExpense } = CollectionsCtx()
  const [filteredExpenses, setfilteredExpenses] = useState([])
  const [totalEstimatedCost, setTotalEstimatedCost] = useState(0)
  const [totalFinalCost, setTotalFinalCost] = useState(0)
  const [totalPaid, setTotalPaid] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    if (props.category) {
      const fex = expenses.filter((item) => item.categoryID === props.category.id)
      setfilteredExpenses(fex)
      setTotalEstimatedCost(fex.reduce((a, b) => a + +b.estimatedCost, 0))
      setTotalFinalCost(fex.reduce((a, b) => a + +b.finalCost, 0))
      setTotalPaid(fex.reduce((a, b) => a + +b.paid, 0))
    }
  }, [expenses, props.category])

  const deleteCategoryHandler = () => {
    deleteCategory(props.category.id)
    navigate('/budget')
  }
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.4,
        type: 'tween',
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div className='d-flex h-100 border border-1 rounded col-8 ml-4 py-2 justify-content-center flex-column'>
      {!props.category && <h2 className='text-center'>Please add a category to get started</h2>}
      {props.category && (
        <>
          <div className='mt-4 mb-auto mx-auto d-flex flex-column '>
            <props.icon className=' mx-auto border border-1 rounded-circle p-2 m-2' size={50} />
            <h4 className=' mx-auto'>
              {props.category.name} <UpdateCategory id={props.category.id} name={props.category.name} />
            </h4>
            <div style={{ fontSize: '0.9rem' }}>
              <span className=' mx-2'>{`Estimated cost: $${totalEstimatedCost}`}</span>
              <span className=' mx-2'>{`Final cost: $${totalFinalCost}`}</span>
              <button onClick={deleteCategoryHandler} className=' mx-2 btn btn-outline-light' style={{ color: 'gray' }}>
                Remove{' '}
                <i>
                  <BsTrash color='gray' />
                </i>
              </button>
            </div>
            <div className={`${classes.bar} mx-auto my-3`}></div>
          </div>
          <motion.ul variants={variants} initial='hidden' animate='visible' className='list-group mt-3 mb-auto h-100'>
            <motion.li
              layout
              variants={variants}
              className={`${classes['expenses-item']} list-group-item 
                    border-0 border-bottom border-top rounded-0 d-flex`}>
              <span className=' my-auto col-4'>EXPENSE</span>
              <span className=' my-auto col-3 ms-auto text-end'>ESTIMATED COST</span>
              <span className=' my-auto col-2 ms-auto text-end'>FINAL COST</span>
              <span className=' my-auto col-1 ms-auto text-end'>PAID</span>
              <span className=' my-auto ms-auto'>...</span>
            </motion.li>
            {filteredExpenses.map((item) => (
              <OneExpense variants={variants} classes={classes} expense={item} key={item.id}></OneExpense>
            ))}
            <motion.li
              layout
              variants={variants}
              className={`${classes['expenses-item']} ${classes['add']} list-group-item 
                    border-0 border-bottom rounded-0 d-flex`}>
              <Link
                onClick={() => {
                  addExpense({
                    categoryID: props.category.id,
                    estimatedCost: 0,
                    finalCost: 0,
                    expenseName: '',
                    paid: 0,
                    createdAt: new Date(),
                  })
                }}
                className=' my-auto'>
                <FiPlusCircle />
                {` Add new expense`}
              </Link>
            </motion.li>
            <motion.li
              layout
              variants={variants}
              className={`${classes['expenses-item']} list-group-item 
                    border-0 border-top rounded-0 d-flex mt-auto`}>
              <span className=' my-auto col-4 fw-bolder'>Total</span>
              <span className=' my-auto col-3 ms-auto text-end fw-bolder'>{`$${totalEstimatedCost}`}</span>
              <span className=' my-auto col-2 ms-auto text-end fw-bolder'>{`$${totalFinalCost}`}</span>
              <span className=' my-auto col-1 ms-auto text-end fw-bolder'>{`$${totalPaid}`}</span>
              <span className=' my-auto ms-auto'>...</span>
            </motion.li>
          </motion.ul>
        </>
      )}
    </motion.div>
  )
}

export default CategoryMain
