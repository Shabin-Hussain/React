const { createSlice } = require("@reduxjs/toolkit");



export const wishlistSlice = createSlice({
    name:'wishlistSlice',
    initialState:[],
    reducers:{
        //1)add to wishlist
        addToWishlist :(state,actions)=>{
            state.push(actions.payload)

            
        },

        //2)remove from wishlist
        removeFromWishlist :()=>{}


    }
})

export const{addToWishlist,removeFromWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer