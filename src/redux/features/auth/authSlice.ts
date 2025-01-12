import { createSlice } from "@reduxjs/toolkit";

type TState = {
    user : null | object;
    token : null | string;
}

const initialState : TState = {
    user : null,
    token : null,

}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers : {
        setUser : (state , action) => {
            const {user , token} = action.payload;
            state.user = user;
            state.token = token;
        },
       
    }
})

export const {setUser} = authSlice.actions;
export default authSlice.reducer;