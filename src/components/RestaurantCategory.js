import React from 'react'
import { useState } from "react";
import Itemlist from './Itemlist';

const RestaurantCategory = ({data}) => {
  const[showitems,setshowitems]=useState(false);
  const itemsshow=()=>{
    setshowitems(!showitems);
  }
  return (
    <div>
    <div className='w-6/12 mx-auto my-4  bg-yellow-500 text-black p-4 border-spacing-2 shadow-lg justify-between rounded-lg'>
       <div className='flex justify-between' onClick={itemsshow}>
        <span className='font-bold'>{data.title}-({data.itemCards.length})</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </div>
    {showitems&&<Itemlist items={data.itemCards}/>}
    </div>
    </div>
  )
}
export default RestaurantCategory;