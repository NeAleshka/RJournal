import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ResponseCreateUser} from "@/api/apiTypes";
import {AppState} from "@/redux/store";
import {HYDRATE} from "next-redux-wrapper";
import {destroyCookie} from "nookies";

export interface UserData {
    data: ResponseCreateUser | null
}

const hydrate = createAction<AppState>(HYDRATE);
const initialState: UserData = {
    data: null
}

export const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        setUserData: (state, {payload}: PayloadAction<ResponseCreateUser | null>) => {
            state.data = payload
        },
        exit: (state) => {
           destroyCookie(null,'authToken')
            state.data = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(hydrate, (state, {payload}) => {
                state.data = payload.user.data
            })
    }
})

export const {setUserData, exit} = userSlice.actions
export const selectUserData = (state: AppState) => state.user.data
export const userReducer = userSlice.reducer