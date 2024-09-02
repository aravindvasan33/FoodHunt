import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Itemlist from './Itemlist'
import { clearCart } from '../utils/cartslice'
const Cart = () => {
  const cartitems=useSelector((store)=>store.cart.items)
  const dispatch=useDispatch();

  const clearall=()=>{
   dispatch(clearCart());
  }
  return (
    <div className='content-center m-2 p-2'>
        <div className='flex flex-row justify-between'>   <h1 className='text-2xl font-extrabold text-yellow-400'>CART</h1>
               <button className='bg-yellow-500  hover:bg-black hover:text-yellow-500 font-bold m-2 p-2 rounded-lg' onClick={clearall}>Clear</button>
        </div>
         
      <div className='bg-yellow-500 w-6/12 m-auto'>
        {cartitems.length===0 && 
        <div className='flex flex-col bg-indigo-950 text-yellow-500'>
          <img src='\images\cartempty.png' alt='emptycart' className='max-h-96'></img>
          <div className='flex flex-col m-2 p-2'>
             <h1 className='text-2xl font-bold text-center'> Cart is empty </h1>
             <h2 className='text-center'> You can go to home page to view more restaurants</h2>
           </div>
          </div>}
        <Itemlist items={cartitems}/>
      </div>
    </div>
  )
}

export default Cart