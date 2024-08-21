import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ProductDetails } from './ProductDetails';
import { emptyDetails } from '../Features/Products/selectedSingleProduct';
import { useNavigate } from 'react-router-dom';

const SelectedProductDetails = () => {
  const { selectedProduct } = useSelector(state => state.selectedSingleProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(emptyDetails())
    navigate('/')
  }
  return (
    <div className='flex flex-col justify-center'>
      <ProductDetails item={selectedProduct} />
      <button onClick={handleClick}>Go Back</button>
    </div>
  )
}

export default SelectedProductDetails 