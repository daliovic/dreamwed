import React from 'react'
import BudgetSidebar from './BudgetSidebar'
import CategoryMain from './CategoryMain'

import { GiDiamondRing } from 'react-icons/gi'
import { TbNumber1, TbNumber2, TbHome, TbGift, TbDots } from 'react-icons/tb'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion/dist/framer-motion'

const icons = [
  {
    name: 'Night 1',
    icon: TbNumber1,
  },
  {
    name: 'Night 2',
    icon: TbNumber2,
  },
  {
    name: 'Home',
    icon: TbHome,
  },
  {
    name: 'Gifts',
    icon: TbGift,
  },
  {
    name: 'Other',
    icon: TbDots,
  },
  {
    name: 'Jewelry',
    icon: GiDiamondRing,
  },
]

function Budget(props) {
  props.categories.forEach(function (item) {
    const ic = icons.filter((it) => it.name === item.name)[0]
    item.icon = ic ? ic.icon : TbDots
  })

  let catID = useParams().id
  if (!catID) catID = 0

  return (
    <motion.div layout className='row my-3 flex-fill'>
      <div className='d-flex flex-row col-9 mx-auto justify-content-between'>
        <BudgetSidebar categories={props.categories} expenses={props.expenses} />
        <CategoryMain category={props.categories[+catID]} icon={icons[+catID].icon} expenses={props.expenses} />
      </div>
    </motion.div>
  )
}

export default Budget
