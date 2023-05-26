import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
        const item = state.products.find((item) => item.id == action.payload.id)

        if(item){
            item.count += action.payload.count
        }else{
            state.products.push(action.payload)
        }
    },
    removeItem: (state,action) => {
        state.products = state.products.filter(item => item.id !== action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem } = cartSlice.actions

export default cartSlice.reducer