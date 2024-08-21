import { configureStore } from '@reduxjs/toolkit';
import productSlice from './Products/productSlice';
import cartSlice from './Cart/cartSlice';
import wishListSlice from './Wishlist/wishListSlice';
import selectedSingleProduct from './Products/selectedSingleProduct';
import themeSwitcher from './ThemeSwitcher/themeSwitcher';

export default configureStore({
  reducer: {
    products:productSlice,
    cartItems:cartSlice,
    wishListItems:wishListSlice,
    selectedSingleProduct:selectedSingleProduct,
    themeSwitcher,themeSwitcher
  }
})