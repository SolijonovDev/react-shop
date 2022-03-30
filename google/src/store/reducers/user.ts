import { UserAction,userActionTypes, UserState } from './../types/user';

const initialState:UserState={
    name:"",
    email:null,
    loading:false
}


export const userReducer=(state=initialState,action:UserAction):UserState=>{
      switch(action.type){
          case userActionTypes.USER_ADD : {
              return state
          }
          case userActionTypes.USER_LOADING:{
              return {...state,loading:action.payload}
          }
          default:
              return state
      }
}