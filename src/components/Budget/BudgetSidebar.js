import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import BudgetSidebarItem from './BudgetSidebarItem'

function BudgetSidebar(props) {
  return (
    <div className='col-4 width-30'>
      <ul className='list-group'>
        <BudgetSidebarItem icon={AiOutlinePlus} name={'Add Category'} index={-1} cost={''} key={'addCategory'} />
        {props.categories.map((cat, i) => {
          const fex = props.expenses.filter((item) => item.categoryID === cat.id)
          const cost = fex.reduce((a, b) => a + +b.estimatedCost, 0)
          return (
            <BudgetSidebarItem
              icon={cat.icon}
              name={cat.name}
              index={i}
              cost={cost}
              key={i}
              totalCats={props.categories.length}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default BudgetSidebar
