import React from 'react';
import BudgetSidebar from './BudgetSidebar';
import CategoryMain from './CategoryMain';

import { GiDiamondRing } from 'react-icons/gi';
import { TbNumber1, TbNumber2, TbHome, TbGift, TbDots } from 'react-icons/tb';
import {  useParams } from 'react-router-dom';
const icons = [
    {
        name:'Night 1',
        icon:TbNumber1
    },
    {
        name:'Night 2',
        icon:TbNumber2
    },
    {
        name:'Home',
        icon:TbHome
    },
    {
        name:'Gifts',
        icon:TbGift
    },
    {
        name:'Other',
        icon:TbDots
    },
    {
        name:'Jewelry',
        icon:GiDiamondRing
    },
]
// eslint-disable-next-line
const CATEGORIES = [
    {
        icon: TbNumber1,
        name: "Night 1",
        cost: 6300
    },
    {
        icon: TbNumber2,
        name: "Night 2",
        cost: 6300
    },
    {
        icon: TbHome,
        name: "Home",
        cost: 8600
    },
    {
        icon: GiDiamondRing,
        name: "Jewelry",
        cost: 6000
    },
    {
        icon: TbGift,
        name: "Gifts",
        cost: 7000
    },
    {
        icon: TbDots,
        name: "Other",
        cost: 7000
    },

]

function Budget(props) {
    props.categories.forEach(function(item){
        const ic = icons.filter((it)=> it.name===item.name)[0]
        item.icon = ic?ic.icon:TbDots;
       });
    
       
    let catID = (useParams().id)
    if (!catID) catID=0


    return (
        <div className="row my-3 flex-fill">
            <div className="d-flex flex-row col-9 mx-auto justify-content-between">
                <BudgetSidebar categories={props.categories} expenses={props.expenses}/>
                <CategoryMain category={props.categories[+(catID)]} icon={icons[+(catID)].icon} expenses={props.expenses} />
            </div>
        </div>
    );
}

export default Budget;