import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState={
    name:'Abhi'
}

const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
        updateName(state,action){
            state.name=action.payload
        }
        
    }
})

export const {updateName}=userSlice.actions;
export default userSlice.reducer;