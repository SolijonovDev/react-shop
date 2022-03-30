import { UserAction, userActionTypes } from "../types/user";


export const addUserAc=(payload:string):UserAction=>({
    type:userActionTypes.USER_ADD,
    payload
})
export const userLoadingAc=(payload:boolean):UserAction=>({
    type:userActionTypes.USER_LOADING,
    payload
})