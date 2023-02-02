import React from "react";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type ActionType = setUserDataType
export type InitialStateType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
};

type setUserDataType = {
  type: 'SET-USER-DATA'
  data: {userId: number, email: string, login: string}
};

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
};

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
      case 'SET-USER-DATA': {
        return {...state, ...action.data, isAuth: true}
      }
      default:
        return state
    }
  };
  
  export const setUserData = (userId: number, email: string, login: string):
  setUserDataType => 
  ({type: 'SET-USER-DATA', data: {userId, email, login}})
  
  export const setAuthUserDataThunk = (dispatch: Dispatch) => {
    authAPI.getAuth().then(data => {
      if (data.resultCode === 0) {
        let {id, login, email} = data
        dispatch(setUserData(id, email, login))
      }
    })
  }