import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cartProduct',
  initialState: {
    cartItems: []
  },
  reducers: {
    addcartItem: (state,action) => {
      state.cartItems.push(action.payload)
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
    },
  }
})

// Action creators are generated for each case reducer function
export const { addcartItem,removeCartItem } = cartSlice.actions

export default cartSlice.reducer