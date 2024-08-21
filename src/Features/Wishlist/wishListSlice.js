import { createSlice } from '@reduxjs/toolkit';


export const wishListSlice = createSlice({
  name: 'wishlistProduct',
  initialState: {
    wishListItems: []
  },
  reducers: {
    addWishListItem: (state,action) => {
      state.wishListItems.push(action.payload)
    },
    removeWishlistItem: (state, action) => {
      state.wishListItems = state.wishListItems.filter(item => item.id !== action.payload.id)
    },
   
  }
})

// Action creators are generated for each case reducer function
export const { addWishListItem ,removeWishlistItem} = wishListSlice.actions

export default wishListSlice.reducer