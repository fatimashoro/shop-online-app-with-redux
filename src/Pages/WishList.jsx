import React from 'react'
import { useSelector } from 'react-redux';
import { ProductDetails } from '../Components/ProductDetails';


export const WishList = () => {
  const { wishListItems } = useSelector(state => state.wishListItems);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mx-auto p-6 sm:px-10'>
      {
        wishListItems.map((wishItem) => {
          return (
            <>
              <ProductDetails item={wishItem} />
            </>
          )
        })
      }

    </div>
  )
}
