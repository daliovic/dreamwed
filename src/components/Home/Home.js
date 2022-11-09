import React from 'react'
import budgetSc from '../../assets/images/budget-sc.png'
import checklistSc from '../../assets/images/checklist-sc.png'
import invitationSc from '../../assets/images/invitation-sc.png'
import HomeCard from './HomeCard'

const CARDS_CONTENT = [
  {
    title: 'Budget',
    description: 'A tool to manage and track your expenses.',
    image: budgetSc,
    link: '/budget',
  },
  {
    title: 'Checklist',
    description: 'Keep track of your tasks all in one place.',
    image: checklistSc,
    link: '/checklist',
  },
  {
    title: 'Invitation',
    description: 'Create custom invitations for your guests.',
    image: invitationSc,
    link: '/invitation',
  },
]

function Home() {
  return (
    <div className='container py-5 h-100'>
      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col col-xl-10 d-flex  justify-content-center gap-5 px-5'>
          {CARDS_CONTENT.map((card, index) => {
            return (
              <HomeCard
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                link={card.link}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
