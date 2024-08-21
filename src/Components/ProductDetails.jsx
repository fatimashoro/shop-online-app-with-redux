import React from 'react';
import { addcartItem, removeCartItem } from '../Features/Cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addWishListItem, removeWishlistItem } from '../Features/Wishlist/wishListSlice';
import { useNavigate } from "react-router-dom";
import { showDetails } from '../Features/Products/selectedSingleProduct';

export const ProductDetails = ({ item }) => {
    const { cartItems } = useSelector(state => state.cartItems);
    const { wishListItems } = useSelector(state => state.wishListItems);
    const { selectedProduct } = useSelector(state => state.selectedSingleProduct)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Check if the item is in the cart
    const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

    // Check if the item is in the wishlist
    const isInWishlist = wishListItems.some(wishlistItem => wishlistItem.id === item.id);
    //handle buy now button functionality
    const addProducttoCart = (item) => {
        dispatch(addcartItem(item))
    }

    //remove cart items
    const removeProductFromCart = (item) => {
        dispatch(removeCartItem(item))
    }

    //handle wishlist button event
    const addItemtoWishlist = (item) => {
        dispatch(addWishListItem(item));
    }

    //remove wishlist items
    const removeItemFromWishlist = (item) => {
        dispatch(removeWishlistItem(item));
    }
    //handle clickeck product's full details 
    const showProductAllDetils = (item) => {
        dispatch(showDetails(item))
        navigate('/details')
    }
    return (

        <div className='rounded-xl overflow-hidden shadow-lg border py-5 mt-4 cursor-pointer dark:bg-gray-800'>
            <img className="w-52 m-auto object-contain h-64 dark:bg-gray-800" src={item.image} alt="Mountain" onClick={() => showProductAllDetils(item)}/>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded  dark:bg-gray-300" />
            <div className='px-6 py-4'>
                <div className="font-bold text-xl mb-2 dark:text-gray-300">
                    {item.title && item.title.slice(0, 20)}
                </div>
                <p className="text-gray-700 dark:text-gray-400 text-base">
                    {selectedProduct.id === item.id ? item.description : `${item.description && item.description.slice(0, 80)},...`}
                </p>
            </div>
            <div className=" pt-4 pb-2 flex justify-around  items-center">
                <span className="text-blue-500 font-bold"> {item.price}</span>
                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-1  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ">3.9⭐</button>
                <span class="bg-blue-100 rounded-full px-3  text-sm font-semibold text-gray-700 py-2 mr-2">{item.category}</span>
            </div>
            <div className="flex justify-around my-2 items-center">
                {
                    !isInCart ? <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => addProducttoCart(item)}>
                        <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
                            </path>
                        </svg>Buy now</button> :
                        <button type="button" class="text-white bg-red-700 dark:bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => removeProductFromCart(item)}>
                            <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
                                </path>
                            </svg>Remove</button>
                }
                {
                    !isInWishlist ? <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" onClick={() => addItemtoWishlist(item)} >
                        <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
                            </path></svg>Wishlist +</button>
                        : <button type="button" class="text-white bg-red-700 dark:bg-red-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" onClick={() => removeItemFromWishlist(item)} >
                            <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
                                </path></svg>Remove -</button>
                }


            </div>
        </div>

    )
}
