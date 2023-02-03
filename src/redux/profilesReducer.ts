import {Dispatch} from "redux";
import { profileType } from '../components/profile/profilteTypes';
import {profileAPI} from "../api/api";

export type InitialStatePropsType = typeof initialState

export type postPropsType = {
  id: number
  message: string
  likescount: number
  dislikecount: number
};

type ActionsType = AddPostType | UpdateNewPostTextType | SetUserProfileType;

type AddPostType = {
  type: "ADD-POST"
};

type UpdateNewPostTextType = {
  type: 'UPDATE-NEW-POST-TEXT'
  newText: string
};

type SetUserProfileType = {
  type: 'SET-USER-PROFILE'
  profile: profileType
};

let initialState = {
  posts: [
    {id: 1, message: 'Привет, как ваши дела?', likescount: 5, dislikecount: 1},
    {id: 2, message: 'А этой мой первый пост', likescount: 10, dislikecount: 2},
    {id: 3, message: 'Меня зовут Вася', likescount: 100, dislikecount: 10}
  ] as Array<postPropsType>,
  newPostText: '',
  profile: null
};

export const profileReducer = (state: InitialStatePropsType = initialState, action: ActionsType):
 InitialStatePropsType => {
    switch (action.type) {
      case 'ADD-POST': {
        let newPost: postPropsType = {
          id: 5,
          message: state.newPostText,
          likescount: 0,
          dislikecount: 0
        }
        let stateCopy = {...state}
        stateCopy.posts = [...state.posts]
        stateCopy.posts.push(newPost)
        stateCopy.newPostText = ''
        return stateCopy
        }
      case 'UPDATE-NEW-POST-TEXT': {
        let stateCopy = {...state}
        stateCopy.newPostText = action.newText
        return stateCopy
        }
      case 'SET-USER-PROFILE': {
        return {...state, profile: action.profile} as InitialStatePropsType
        }
      default:
        return state
    }
  };

  export const AddPostAC = (): AddPostType => ({type: "ADD-POST"})
  export const UpdateNewPostTextAC = (newText: string): UpdateNewPostTextType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: newText
  });

  export const SetUserProfileAC = (profile: profileType): 
  SetUserProfileType => ({type: 'SET-USER-PROFILE', profile});
  
  export const setUserThunk = (userId: string | undefined, dispatch: Dispatch) => {
      profileAPI.getProfile(userId).then(response => {
        dispatch(SetUserProfileAC(response.data))
      })
  };