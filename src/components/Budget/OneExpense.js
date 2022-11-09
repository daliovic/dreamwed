import React, { useEffect, useState } from 'react'
import { CollectionsCtx } from '../../context/CollectionsContext'

import { motion } from 'framer-motion/dist/framer-motion'
const OneExpense = (props) => {
  const [expenseState, setExpenseState] = useState(props.expense)
  const { deleteExpense, updateExpense } = CollectionsCtx()
  const [succGreen, setSuccGreen] = useState('')

  const numberCheck = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault()
    }
  }

  const inputValueChange = (e) => {
    setExpenseState({ ...expenseState, [e.target.name]: e.target.value })
  }
  const inputValueBlur = (e) => {
    updateExpense(props.expense.id, { [e.target.name]: expenseState[e.target.name] })
    setSuccGreen('updatedSucc')
  }

  const enterKeyHandler = (e) => {
    if (e.keyCode === 13) {
      e.target.blur()
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccGreen('')
    }, 1500)
    return () => clearTimeout(timer)
  }, [succGreen])
  return (
    <motion.li
      layout
      variants={props.variants}
      className={`${props.classes['expenses-item']} list-group-item 
                    border-0 border-bottom rounded-0 d-flex  ${succGreen} `}
      onKeyDown={enterKeyHandler}>
      <span className=' my-auto col-4'>
        <div className='expense-group'>
          <input
            name={'expenseName'}
            className={` ms-auto border-0 text-start`}
            type={'text'}
            style={{ width: ('' + expenseState.expenseName).length + 1 + 'ch', minWidth: '5ch' }}
            value={expenseState.expenseName}
            onChange={inputValueChange}
            maxLength={35}
            onBlur={inputValueBlur}
            onKeyDown={enterKeyHandler}
          />
        </div>
      </span>
      <span className=' my-auto col-3 ms-auto text-end'>
        <div className='expense-group'>
          <span className='my-auto'>{`$ `}</span>
          <input
            name={'estimatedCost'}
            className=' ms-auto border-0 text-end'
            type={'text'}
            style={{ width: ('' + expenseState.estimatedCost).length + 1 + 'ch' }}
            value={expenseState.estimatedCost}
            onChange={inputValueChange}
            maxLength={7}
            onKeyPress={numberCheck}
            onBlur={inputValueBlur}
          />
        </div>
      </span>
      <span className=' my-auto col-2 ms-auto text-end'>
        <div className='expense-group'>
          <span className='my-auto'>{`$ `}</span>
          <input
            name={'finalCost'}
            className=' ms-auto border-0 text-end'
            type={'text'}
            style={{ width: ('' + expenseState.finalCost).length + 1 + 'ch' }}
            value={expenseState.finalCost}
            onChange={inputValueChange}
            maxLength={7}
            onKeyPress={numberCheck}
            onBlur={inputValueBlur}
          />
        </div>
      </span>
      <span className=' my-auto col-1 ms-auto text-end'>
        <div className='expense-group'>
          <span className='my-auto'>{`$ `}</span>
          <input
            name={'paid'}
            className=' ms-auto border-0 text-end'
            type={'text'}
            style={{ width: ('' + expenseState.paid).length + 1 + 'ch' }}
            value={expenseState.paid}
            onChange={inputValueChange}
            maxLength={7}
            onKeyPress={numberCheck}
            onBlur={inputValueBlur}
          />
        </div>
      </span>
      <span
        className=' my-auto ms-auto'
        onClick={() => {
          deleteExpense(props.expense.id)
        }}>
        ...
      </span>
    </motion.li>
  )
}

export default OneExpense
