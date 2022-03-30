
export interface UserState{
    name:string | null;
    email:string | undefined | null ;
    loading:boolean
}

export enum userActionTypes {
    USER_ADD="USER_ADD",
    USER_LOADING="USER_LOADING"
}

export interface UserAdd{
    type:userActionTypes.USER_ADD;
    payload:string
}

export interface UserLoading{
    type:userActionTypes.USER_LOADING;
    payload:boolean
}

export type UserAction=UserAdd | UserLoading