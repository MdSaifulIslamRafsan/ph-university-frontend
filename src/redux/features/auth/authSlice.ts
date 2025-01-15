import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TUser } from "../../../types";

type TState = {
    user : null | TUser;
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
        logout : (state) => {
            state.user = null;
            state.token = null
        }
    }
})

export const {setUser , logout} = authSlice.actions;
export default authSlice.reducer;
export const useCurrentToken  = (state: RootState) => state.auth.token;