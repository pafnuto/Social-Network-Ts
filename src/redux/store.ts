import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profilesReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"

export type AppStatetype = ReturnType<typeof rootReduser>

let rootReduser = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer
});

export let store = createStore(rootReduser, applyMiddleware(thunkMiddleware))
