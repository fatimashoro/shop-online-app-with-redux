import { createSlice } from '@reduxjs/toolkit';


export const SelectedProductDetails = createSlice({
  name: 'wishlistProduct',
  initialState: {
    selectedProduct: {}
  },
  reducers: {
    showDetails: (state,action) => {
      state.selectedProduct = action.payload
    },
    emptyDetails: (state,action) => {
      state.selectedProduct = {}
    },
 
   
  }
})

// Action creators are generated for each case reducer function
export const { showDetails,emptyDetails} = SelectedProductDetails.actions

export default SelectedProductDetails.reducer