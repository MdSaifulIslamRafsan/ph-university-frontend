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
        
    }
})

export const {} = authSlice.actions;
export default authSlice.reducer;