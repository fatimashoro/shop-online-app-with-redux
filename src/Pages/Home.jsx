import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPIProduct } from '../Features/Products/productSlice';
import { ProductDetails } from '../Components/ProductDetails';
import {emptyDetails} from '../Features/Products/selectedSingleProduct';

const Home = () => {
  const dispatch = useDispatch();
  const { product, Error, isLoadding } = useSelector(state => state.products);
  const [page, setPage] = useState(1);
  const limit = 8;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  //this is for showing current data
  const currentPageData = product.slice(startIndex, endIndex);


  //api call initially
  useEffect(() => {
    dispatch(fetchAPIProduct({ page, limit }))
    dispatch(emptyDetails())
  }, [dispatch, page])

  if (Error) {
    return <h1>{Error}</h1>
  }
  if (isLoadding) {
    return <h1 className='text-2xl font-extrabold'>LOaddinggg...............</h1>
  }

  return (
    <div className='dark:bg-gray-500'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mx-auto p-6 sm:px-10'>
        {
          currentPageData.map(item => (
            <ProductDetails item={item} key={item.id} />
          ))
        }
      </div>
      <div className='my-4 flex justify-center space-x-6'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 border border-blue-700 rounded dark:bg-gray-800' onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <span className='py-2 dark:text-white'>Page {page}</span>
        <button className='bg-blue-500 hover:bg-blue-700 dark:bg-gray-800 text-white font-bold py-2 px-6 border border-blue-700 rounded' onClick={() => setPage(prev => prev + 1)} disabled={endIndex >= product.length}>
          Next
        </button>
      </div>
    </div>
  )
}
export default Home