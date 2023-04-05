import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {userReducer} from "@/redux/slices/user";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {createWrapper} from "next-redux-wrapper";


export const makeStore = () =>
    configureStore({
        reducer: {
            user:userReducer
        },
        devTools: true,
    });


export const store=makeStore()

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore);