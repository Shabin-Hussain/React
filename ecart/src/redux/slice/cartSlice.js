import { createSlice } from "@reduxjs/toolkit";





export const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,actions)=>{
            state.push(actions.payload)

        },

        removeItemCart:(state,actions)=>{
           return  state.filter(item=>item.id!=actions.payload)
        },

        emptyCart:(state)=>{
            return state = []
        }


    }
})

export const {addToCart,removeItemCart,emptyCart} = cartSlice.actions

export default cartSlice.reducer