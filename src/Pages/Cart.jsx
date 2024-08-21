import React from 'react';
import { useSelector } from 'react-redux';
import { ProductDetails } from '../Components/ProductDetails';


 const Cart = () => {
  const {cartItems} = useSelector(state => state.cartItems) 

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mx-auto p-6 sm:px-10'>
      {
cartItems.map((cartItem)=>{
  return (
    <>
    <ProductDetails item={cartItem}/>
    </>
  )
})
      }
    </div>
  )
}

export default Cart